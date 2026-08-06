'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, {
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
  type Ref,
} from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function useMergeRefs<T>(...refs: (Ref<T> | undefined)[]) {
  return useMemo(() => {
    if (refs.every((ref) => ref == null)) return null;
    return (node: T) => {
      refs.forEach((ref) => {
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref != null) {
          (ref as React.MutableRefObject<T | null>).current = node;
        }
      });
    };
  }, [refs]);
}

function useResponsiveValue(baseValue: number, mobileValue: number) {
  const [value, setValue] = useState(baseValue);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setValue(window.innerWidth < 768 ? mobileValue : baseValue);
    };

    handleResize();

    let timeoutId: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 80);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [baseValue, mobileValue]);

  return value;
}

export interface RadialScrollGalleryProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Render function that returns the array of items to be placed on the wheel.
   */
  children: (hoveredIndex: number | null) => ReactNode[];
  /**
   * The vertical scroll distance (in pixels) required to complete one full 360-degree rotation.
   * Defaults to 1800.
   */
  scrollDuration?: number;
  /**
   * Percentage of the circle visible above the fold (0-100).
   * Defaults to 50.
   */
  visiblePercentage?: number;
  /** Radius of the circle on desktop devices (>=768px). Defaults to 360px (tight grouping). */
  baseRadius?: number;
  /** Radius of the circle on mobile devices (<768px). Defaults to 180px. */
  mobileRadius?: number;
  /** GSAP ScrollTrigger start position string. Defaults to "top 20%". */
  startTrigger?: string;
  /** Callback fired when an item is clicked. */
  onItemSelect?: (index: number) => void;
  /** Rotational direction of the wheel. */
  direction?: 'ltr' | 'rtl';
  /** Disables all interactions. */
  disabled?: boolean;
}

/**
 * Scroll-driven 3D Rotational Gallery.
 * Rotates cards along a perfectly balanced, compact 3D circle as the user scrolls the page.
 */
export const RadialScrollGallery = forwardRef<
  HTMLDivElement,
  RadialScrollGalleryProps
>(
  (
    {
      children,
      scrollDuration = 1800,
      visiblePercentage = 50,
      baseRadius = 360,
      mobileRadius = 180,
      className = '',
      startTrigger = 'top 20%',
      onItemSelect,
      direction = 'ltr',
      disabled = false,
      ...rest
    },
    ref
  ) => {
    const pinRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLUListElement>(null);
    const childRef = useRef<HTMLLIElement>(null);

    const mergedRef = useMergeRefs(ref, pinRef);

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [childSize, setChildSize] = useState<{ w: number; h: number } | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    const currentRadius = useResponsiveValue(baseRadius, mobileRadius);
    const circleDiameter = currentRadius * 2;

    const { visibleDecimal, hiddenDecimal } = useMemo(() => {
      const clamped = Math.max(20, Math.min(100, visiblePercentage));
      const v = clamped / 100;
      return { visibleDecimal: v, hiddenDecimal: 1 - v };
    }, [visiblePercentage]);

    const childrenNodes = useMemo(
      () => React.Children.toArray(children(hoveredIndex)),
      [children, hoveredIndex]
    );
    const childrenCount = childrenNodes.length;

    useEffect(() => {
      setIsMounted(true);

      if (!childRef.current) return;

      const observer = new ResizeObserver((entries) => {
        let hasChanged = false;
        for (const entry of entries) {
          setChildSize({
            w: entry.contentRect.width,
            h: entry.contentRect.height,
          });
          hasChanged = true;
        }
        if (hasChanged) {
          ScrollTrigger.refresh();
        }
      });

      observer.observe(childRef.current);
      return () => observer.disconnect();
    }, [childrenCount]);

    // GSAP ScrollTrigger 3D Scroll-Driven Rotation Engine
    useGSAP(
      () => {
        if (!pinRef.current || !containerRef.current || childrenCount === 0) return;

        const prefersReducedMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;

        if (!prefersReducedMotion) {
          // Entrance reveal
          gsap.fromTo(
            containerRef.current.children,
            { scale: 0.8, autoAlpha: 0 },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.8,
              ease: 'power2.out',
              stagger: 0.04,
              scrollTrigger: {
                trigger: pinRef.current,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Scroll Scrubbing Rotation
          gsap.to(containerRef.current, {
            rotation: direction === 'rtl' ? -360 : 360,
            ease: 'none',
            scrollTrigger: {
              trigger: pinRef.current,
              pin: true,
              start: startTrigger,
              end: `+=${scrollDuration}`,
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          });
        }
      },
      {
        scope: pinRef,
        dependencies: [
          scrollDuration,
          currentRadius,
          startTrigger,
          childrenCount,
          direction,
        ],
      }
    );

    if (childrenCount === 0) return null;

    // Height buffer to prevent clipping
    const calculatedBuffer = childSize ? childSize.h * 0.4 + 40 : 120;
    const visibleAreaHeight = circleDiameter * visibleDecimal + calculatedBuffer;

    return (
      <div
        ref={mergedRef}
        className={`w-full relative flex items-center justify-center overflow-visible select-none ${className}`}
        {...rest}
      >
        <div
          className="relative w-full overflow-visible flex justify-center"
          style={{
            height: `${visibleAreaHeight}px`,
          }}
        >
          {/* Glowing Ambient Core Hub - Prevents Hole in Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          <ul
            ref={containerRef}
            className={`
              absolute left-1/2 -translate-x-1/2 will-change-transform m-0 p-0 list-none
              transition-opacity duration-500 ease-out
              ${disabled ? 'opacity-50 pointer-events-none grayscale' : ''}
              ${isMounted ? 'opacity-100' : 'opacity-0'}
            `}
            style={{
              width: circleDiameter,
              height: circleDiameter,
              bottom: -(circleDiameter * hiddenDecimal * 0.6),
              transformStyle: 'preserve-3d',
            }}
          >
            {childrenNodes.map((child, index) => {
              const angle = (index / childrenCount) * 2 * Math.PI;
              let x = currentRadius * Math.cos(angle);
              const y = currentRadius * Math.sin(angle);

              if (direction === 'rtl') {
                x = -x;
              }

              const rotationAngle = (angle * 180) / Math.PI;
              const isHovered = hoveredIndex === index;
              const isAnyHovered = hoveredIndex !== null;

              return (
                <li
                  key={index}
                  ref={index === 0 ? childRef : null}
                  className="absolute top-1/2 left-1/2 will-change-transform"
                  style={{
                    zIndex: isHovered ? 100 : 10,
                    transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) rotate(${
                      rotationAngle + 90
                    }deg)`,
                  }}
                >
                  <div
                    role="button"
                    tabIndex={disabled ? -1 : 0}
                    onClick={() => !disabled && onItemSelect?.(index)}
                    onMouseEnter={() => !disabled && setHoveredIndex(index)}
                    onMouseLeave={() => !disabled && setHoveredIndex(null)}
                    className={`
                      block cursor-pointer outline-none text-left
                      rounded-2xl transition-all duration-300 ease-out will-change-transform
                      ${isHovered ? 'scale-115 -translate-y-4 shadow-2xl z-50 border-cyan-400' : 'scale-100'}
                      ${
                        isAnyHovered && !isHovered
                          ? 'blur-[1px] opacity-40'
                          : 'blur-0 opacity-100'
                      }
                    `}
                  >
                    {child}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
);

RadialScrollGallery.displayName = 'RadialScrollGallery';
export default RadialScrollGallery;
