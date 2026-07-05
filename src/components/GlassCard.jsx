import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({ 
  children, 
  className = '', 
  delay = 0,
  hoverLift = true,
  glow = true,
  onClick
}) => {
  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    currentTarget.style.setProperty('--mouse-x', `${x}px`);
    currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1], // Custom cubic bezier for premium fluid feeling
        delay 
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`
        relative rounded-2xl overflow-hidden p-6 transition-all duration-300
        glass-effect-light dark:glass-effect-dark
        ${glow ? 'glow-card' : ''}
        ${hoverLift ? 'hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] hover:border-premiumLight-primary/20 dark:hover:border-premiumDark-accent/30' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* Dynamic Glowing border effect */}
      <div className="absolute inset-0 border border-transparent rounded-2xl pointer-events-none z-20 group-hover:border-premiumLight-primary/30 dark:group-hover:border-premiumDark-accent/20 transition-colors duration-300" />
      {children}
    </motion.div>
  );
};

export default GlassCard;
