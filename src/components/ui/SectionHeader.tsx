import React from 'react';
import { motion } from 'motion/react';
import { CharacterReveal } from './CharacterReveal';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle: string;
  number?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = 'center',
}) => {
  const words = title.split(' ');
  const firstWord = words[0];
  const remainingWords = words.slice(1).join(' ');

  return (
    <div
      className={`flex flex-col mb-16 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}
    >
      {/* Main Title Character Reveal Animation with Cyan Accent */}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-100 max-w-4xl leading-[1.15]">
        <CharacterReveal
          text={firstWord}
          as="span"
          className="inline-block text-white mr-[0.25em]"
        />
        {remainingWords && (
          <CharacterReveal
            text={remainingWords}
            as="span"
            delay={0.15}
            className="inline-block text-gradient-cyan"
          />
        )}
      </h2>

      {/* Subtitle Fade Reveal */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 text-base md:text-lg text-slate-400 max-w-2xl font-normal leading-relaxed"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};
