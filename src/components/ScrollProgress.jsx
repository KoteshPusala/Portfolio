import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-premiumLight-primary via-premiumLight-accent to-premiumDark-secondary dark:from-premiumDark-accent dark:via-premiumDark-secondary dark:to-blue-400 origin-[0%] z-[100] shadow-[0_2px_8px_rgba(59,130,246,0.3)]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
