import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-premiumLight-card dark:bg-premiumDark-card border-t border-premiumLight-border dark:border-premiumDark-border/40 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
        
        {/* Brand/Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-premiumLight-primary to-premiumLight-accent dark:from-premiumDark-accent dark:to-premiumDark-secondary flex items-center justify-center font-outfit font-extrabold text-white text-base shadow-sm">
              PK
            </div>
            <span className="font-poppins font-bold text-base text-premiumLight-text dark:text-premiumDark-text tracking-tight group-hover:text-premiumLight-primary dark:group-hover:text-premiumDark-accent transition-colors duration-300">
              Kotesh Pusala
            </span>
          </button>
          <span className="text-xs text-premiumLight-muted dark:text-premiumDark-muted font-sans mt-1">
            Full-Stack Web Developer & AI Enthusiast
          </span>
        </div>

        {/* Social Link Handles */}
        <div className="flex items-center space-x-3.5">
          {[
            { icon: <FaGithub className="w-4 h-4" />, url: personalInfo.socials.github, label: "GitHub" },
            { icon: <FaLinkedin className="w-4 h-4" />, url: personalInfo.socials.linkedin, label: "LinkedIn" },
            { icon: <SiLeetcode className="w-4 h-4" />, url: personalInfo.socials.leetcode, label: "LeetCode" },
            { icon: <Mail className="w-4 h-4" />, url: personalInfo.socials.email, label: "Email" }
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2 rounded-lg border border-premiumLight-border dark:border-[#1e293b] bg-premiumLight-bg dark:bg-[#0B1120] text-premiumLight-muted dark:text-premiumDark-muted hover:text-premiumLight-primary dark:hover:text-premiumDark-accent hover:border-premiumLight-primary/30 dark:hover:border-premiumDark-accent/30 transition-all duration-300 cursor-pointer"
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>

      {/* Copyright Credits Bar */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-premiumLight-border/50 dark:border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-premiumLight-muted dark:text-premiumDark-muted font-sans gap-4">
        <span>
          &copy; {currentYear} Pusala Kotesh. All rights reserved.
        </span>
        <span className="flex items-center gap-1">
          Made with <span className="text-red-500 animate-pulse">❤️</span> using React + Tailwind CSS
        </span>
      </div>
    </footer>
  );
};

export default Footer;
