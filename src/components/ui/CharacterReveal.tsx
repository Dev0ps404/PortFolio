import React from 'react';
import { motion } from 'motion/react';

interface CharacterRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div';
}

export const CharacterReveal: React.FC<CharacterRevealProps> = ({
  text,
  className = '',
  delay = 0,
  as = 'h2',
}) => {
  const Component = motion[as];
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025, // 25ms stagger per letter
        delayChildren: delay,
      },
    },
  } as const;

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: '0.3em',
    },
    visible: {
      opacity: 1,
      y: '0em',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // power3.out equivalent
      },
    },
  } as const;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={containerVariants}
      className={className}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </Component>
  );
};

export default CharacterReveal;
