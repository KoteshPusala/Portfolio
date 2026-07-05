import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // 'primary' | 'secondary' | 'glow' | 'outline'
  className = '',
  icon,
  iconPosition = 'right',
  disabled = false,
  href,
  download
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-premiumDark-accent disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-premiumLight-primary dark:bg-premiumDark-accent text-white dark:text-premiumDark-text hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)] dark:hover:shadow-[0_8px_20px_rgba(59,130,246,0.4)] hover:brightness-110 border border-transparent',
    secondary: 'bg-premiumLight-card dark:bg-premiumDark-card text-premiumLight-text dark:text-premiumDark-text hover:bg-premiumLight-muted/10 dark:hover:bg-premiumDark-muted/10 border border-premiumLight-border dark:border-premiumDark-border',
    glow: 'relative text-white bg-gradient-to-r from-premiumDark-accent to-premiumDark-secondary hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-105 border border-transparent',
    outline: 'bg-transparent text-premiumLight-primary dark:text-premiumDark-accent border border-premiumLight-primary/30 dark:border-premiumDark-accent/30 hover:border-premiumLight-primary dark:hover:border-premiumDark-accent hover:bg-premiumLight-primary/5 dark:hover:bg-premiumDark-accent/5'
  };

  const buttonProps = {
    type,
    onClick,
    disabled,
    className: `${baseStyles} ${variants[variant]} ${className}`
  };

  const renderContent = () => (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  // If href is provided, render as link
  if (href) {
    if (download) {
      return (
        <motion.a
          href={href}
          download={download}
          className={buttonProps.className}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {renderContent()}
        </motion.a>
      );
    }
    return (
      <motion.a
        href={href}
        className={buttonProps.className}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {renderContent()}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...buttonProps}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {renderContent()}
    </motion.button>
  );
};

export default Button;
