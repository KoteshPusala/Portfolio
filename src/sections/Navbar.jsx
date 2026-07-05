import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useActiveSection } from '../hooks/useActiveSection';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Track scroll position to adjust background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeSection = useActiveSection(navItems.map(item => item.id));

  const handleScrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-nav-light dark:glass-nav-dark py-4 shadow-md' 
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleScrollTo('home')}
          className="flex items-center space-x-2 group focus:outline-none"
        >
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-r from-premiumLight-primary to-premiumLight-accent dark:from-premiumDark-accent dark:to-premiumDark-secondary flex items-center justify-center font-outfit font-extrabold text-white text-xl shadow-[0_4px_12px_rgba(59,130,246,0.3)]"
          >
            PK
          </motion.div>
          <span className="hidden sm:inline font-poppins font-bold text-lg text-premiumLight-text dark:text-premiumDark-text tracking-tight group-hover:text-premiumLight-primary dark:group-hover:text-premiumDark-accent transition-colors duration-300">
            Kotesh Pusala
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`relative px-4 py-2 text-sm font-medium font-outfit rounded-full transition-colors duration-300 focus:outline-none ${
                activeSection === item.id 
                  ? 'text-premiumLight-primary dark:text-premiumDark-accent' 
                  : 'text-premiumLight-muted dark:text-premiumDark-muted hover:text-premiumLight-text dark:hover:text-premiumDark-text'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span 
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-premiumLight-primary dark:bg-premiumDark-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Resume Button */}
          <motion.a
            href={personalInfo.resumeUrl}
            download="Pusala_Kotesh_Resume.pdf"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-premiumLight-primary to-premiumLight-accent dark:from-premiumDark-accent dark:to-premiumDark-secondary text-white text-sm font-semibold shadow-md hover:shadow-lg dark:shadow-[0_4px_12px_rgba(139,92,246,0.25)] hover:brightness-110 transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </motion.a>
        </div>

        {/* Mobile Navbar Controls */}
        <div className="flex lg:hidden items-center space-x-3">
          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg border border-premiumLight-border dark:border-premiumDark-border bg-premiumLight-card dark:bg-premiumDark-card text-premiumLight-muted dark:text-premiumDark-muted focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full glass-nav-light dark:glass-nav-dark overflow-hidden absolute top-full left-0 shadow-lg border-t border-premiumLight-border dark:border-premiumDark-border"
          >
            <div className="px-6 py-8 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`text-left py-2 font-medium font-outfit text-base transition-colors ${
                    activeSection === item.id
                      ? 'text-premiumLight-primary dark:text-premiumDark-accent pl-2 border-l-2 border-premiumLight-primary dark:border-premiumDark-accent'
                      : 'text-premiumLight-muted dark:text-premiumDark-muted'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-premiumLight-border dark:border-premiumDark-border flex flex-col space-y-4">
                {/* Mobile Resume Link */}
                <a
                  href={personalInfo.resumeUrl}
                  download="Pusala_Kotesh_Resume.pdf"
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-premiumLight-primary to-premiumLight-accent dark:from-premiumDark-accent dark:to-premiumDark-secondary text-white text-sm font-semibold shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
