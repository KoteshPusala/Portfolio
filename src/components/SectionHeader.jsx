import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeader = ({
  title,
  subtitle,
  description,
  alignment = 'center', // 'center' | 'left'
  className = ''
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const alignClasses = alignment === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={`flex flex-col mb-16 max-w-3xl ${alignClasses} ${alignment === 'center' ? 'mx-auto' : ''} ${className}`}
    >
      {subtitle && (
        <motion.span
          variants={itemVariants}
          className="text-sm font-semibold tracking-widest uppercase text-premiumLight-primary dark:text-premiumDark-accent mb-2 font-outfit"
        >
          {subtitle}
        </motion.span>
      )}
      
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-premiumLight-text dark:text-premiumDark-text font-poppins relative pb-4"
      >
        {title}
        <span 
          className={`absolute bottom-0 h-1 rounded-full bg-gradient-to-r from-premiumLight-primary to-premiumLight-accent dark:from-premiumDark-accent dark:to-premiumDark-secondary w-20 ${
            alignment === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'
          }`} 
        />
      </motion.h2>

      {description && (
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-premiumLight-muted dark:text-premiumDark-muted mt-6 leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
