import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Code } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import Button from '../components/Button';

const titles = [
  "Full-Stack Web Developer",
  "React Developer",
  "Backend Developer",
  "AI Enthusiast",
  "Problem Solver"
];

// Floating tech icon badges configuration
const techBadges = [
  { icon: "⚛️", name: "React", top: "10%", left: "15%", delay: 0 },
  { icon: "🐍", name: "Python", top: "25%", right: "10%", delay: 1 },
  { icon: "🚀", name: "FastAPI", bottom: "15%", left: "12%", delay: 2 },
  { icon: "🍃", name: "MongoDB", bottom: "20%", right: "15%", delay: 3 },
  { icon: "⚡", name: "Next.js", top: "50%", left: "-5%", delay: 1.5 },
  { icon: "🔥", name: "Firebase", top: "55%", right: "-5%", delay: 2.5 }
];

export const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic typing animation effect
  useEffect(() => {
    const activeWord = titles[titleIndex];
    let timer;

    if (isDeleting) {
      // Deleting character
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, 50); // Speed of deletion
    } else {
      // Adding character
      timer = setTimeout(() => {
        setCurrentText((prev) => activeWord.slice(0, prev.length + 1));
      }, 100); // Speed of typing
    }

    // Word completely typed out, pause then delete
    if (!isDeleting && currentText === activeWord) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } 
    // Word completely deleted, move to next word
    else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
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

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 bg-premiumLight-bg dark:bg-premiumDark-bg"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12 md:py-20">
        
        {/* Left Text Intro */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col space-y-6 text-left"
        >
          {/* Welcome greeting tag */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-premiumLight-primary/10 dark:bg-premiumDark-accent/15 px-4 py-2 rounded-full self-start border border-premiumLight-primary/20 dark:border-premiumDark-accent/20 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-premiumLight-primary dark:bg-premiumDark-accent animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-premiumLight-primary dark:text-premiumDark-accent font-outfit">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-poppins text-premiumLight-text dark:text-premiumDark-text">
              Hi, I'm <span className="bg-gradient-to-r from-premiumLight-primary via-premiumLight-accent to-premiumDark-secondary dark:from-premiumDark-accent dark:to-premiumDark-secondary bg-clip-text text-transparent">Pusala Kotesh</span>
            </h1>
            
            {/* Animated Typing Role */}
            <div className="h-10 sm:h-12 flex items-center">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold font-outfit text-premiumLight-muted dark:text-premiumDark-muted">
                I am a{' '}
                <span className="text-premiumLight-primary dark:text-premiumDark-accent border-r-2 border-premiumLight-primary dark:border-premiumDark-accent pr-1 animate-pulse">
                  {currentText}
                </span>
              </span>
            </div>
          </motion.div>

          {/* Subheading/Summary */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-premiumLight-muted dark:text-premiumDark-muted font-sans leading-relaxed max-w-2xl"
          >
            {personalInfo.summary}
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Button 
              variant="primary" 
              onClick={handleScrollToProjects}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View Projects
            </Button>
            
            <Button 
              variant="secondary" 
              href={personalInfo.resumeUrl}
              download="Pusala_Kotesh_Resume.pdf"
              icon={<Download className="w-4 h-4" />}
            >
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Animated Developer IDE mock */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="lg:col-span-5 relative w-full flex items-center justify-center max-w-md lg:max-w-none mx-auto py-12"
        >
          {/* Floating tech badges orbiting the layout */}
          {techBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 0 }}
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: badge.delay
              }}
              style={{
                position: "absolute",
                top: badge.top,
                bottom: badge.bottom,
                left: badge.left,
                right: badge.right
              }}
              className="z-20 bg-premiumLight-card/90 dark:bg-premiumDark-card/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-premiumLight-border dark:border-premiumDark-border shadow-md flex items-center space-x-2 font-outfit text-xs font-semibold text-premiumLight-text dark:text-premiumDark-text"
            >
              <span>{badge.icon}</span>
              <span>{badge.name}</span>
            </motion.div>
          ))}

          {/* Core IDE container Mockup */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl dark:shadow-[0_20px_50px_rgba(31,41,55,0.5)] border border-premiumLight-border dark:border-premiumDark-border w-full aspect-[4/3] flex flex-col bg-[#0f1422]">
            {/* IDE Window bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#090d16] border-b border-premiumDark-border/60">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-premiumDark-muted font-mono font-medium">
                <Code className="w-3.5 h-3.5 text-premiumDark-accent" />
                <span>main.py</span>
              </div>
              <div className="w-10" />
            </div>

            {/* IDE Code Area */}
            <div className="flex-1 p-6 font-mono text-xs sm:text-sm text-left overflow-y-auto leading-relaxed space-y-4">
              <div>
                <span className="text-pink-500">class</span>{' '}
                <span className="text-blue-400">Developer</span>:
              </div>
              <div className="pl-4">
                <span className="text-pink-500">def</span>{' '}
                <span className="text-yellow-400 font-medium">__init__</span>(self):
                <div className="pl-4 text-slate-400">
                  self.name = <span className="text-green-300">"Pusala Kotesh"</span>
                  <br />
                  self.role = <span className="text-green-300">"Full-Stack & AI"</span>
                  <br />
                  self.skills = [
                    <span className="text-green-300">"React"</span>,{' '}
                    <span className="text-green-300">"FastAPI"</span>,{' '}
                    <span className="text-green-300">"LLMs"</span>
                  ]
                </div>
              </div>
              
              <div className="pl-4">
                <span className="text-pink-500">def</span>{' '}
                <span className="text-yellow-400 font-medium">is_passionate</span>(self):
                <div className="pl-4 text-emerald-400">
                  <span className="text-pink-500">return</span>{' '}
                  <span className="text-amber-300">True</span>
                </div>
              </div>

              <div className="pt-2 text-slate-500 border-t border-slate-800">
                # Running analysis...
                <br />
                &gt;&gt;&gt; print(Kotesh.is_passionate())
                <br />
                <span className="text-amber-300">True</span>
              </div>
            </div>
          </div>

          {/* Back Glowing Shadow Orb */}
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-premiumLight-primary/20 to-premiumLight-accent/20 dark:from-premiumDark-accent/20 dark:to-premiumDark-secondary/15 blur-3xl z-[-1] pointer-events-none" />
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
