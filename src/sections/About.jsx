import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo, aboutStats } from '../data/portfolioData';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';

// Self-contained Animated Counter component
const AnimatedCounter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) {
        setCount(end);
        return;
      }
      
      const duration = 2000; // 2 seconds
      const incrementTime = Math.max(Math.floor(duration / end), 15);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 100) || 1; // scale increments
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-extrabold font-outfit text-premiumLight-primary dark:text-premiumDark-accent">
      {count}
      {suffix}
    </span>
  );
};

export const About = () => {
  return (
    <section 
      id="about" 
      className="relative py-24 px-6 overflow-hidden bg-premiumLight-bg dark:bg-premiumDark-bg"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          title="About Me" 
          subtitle="Biography"
          description="A quick look into my professional background, engineering passions, and career journey."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Left Side: Bio Text */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col space-y-6 text-left leading-relaxed text-premiumLight-muted dark:text-premiumDark-muted font-sans"
          >
            <h3 className="text-2xl font-bold font-poppins text-premiumLight-text dark:text-premiumDark-text">
              Engineering Scalable Solutions & Exploring AI
            </h3>
            
            <p>
              I am a results-driven Full-Stack Web Developer and Computer Science undergraduate with a deep focus on designing high-performance web applications and AI-integrated products. Leveraging a solid grounding in software engineering principles, I specialize in constructing fluid frontends using React and Next.js, backed by secure, robust API layers developed in FastAPI and Node.js.
            </p>

            <p>
              My approach to engineering combines a rigorous practice of Data Structures & Algorithms with modern system architecture design. I am deeply committed to writing clean, maintainable code, optimizing database operations (SQL and NoSQL), and integrating Large Language Models (LLMs) to automate complex workflows.
            </p>

            <p>
              I thrive in collaborative, fast-paced environments like hackathons and open-source projects, translating abstract product ideas into production-ready software solutions that address real-world business and health-tech issues.
            </p>

            {/* Glowing Callout regarding SDE goals */}
            <div className="p-5 rounded-2xl border border-premiumLight-primary/10 dark:border-premiumDark-accent/15 bg-premiumLight-primary/5 dark:bg-premiumDark-accent/5 shadow-inner">
              <span className="text-sm font-semibold text-premiumLight-primary dark:text-premiumDark-accent uppercase tracking-wider font-outfit block mb-1">
                Current Focus
              </span>
              <p className="text-premiumLight-text dark:text-slate-300 text-sm leading-relaxed">
                Deepening expertise in distributed systems, API performance engineering, and autonomous LLM orchestration. I am actively seeking <strong>Software Development Engineer (SDE), Full-Stack Developer, and AI Engineer</strong> opportunities in high-growth product teams.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Statistics Grid */}
          <div className="lg:col-span-5 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aboutStats.map((stat, index) => (
              <GlassCard 
                key={index}
                className="flex flex-col justify-center items-center text-center p-8 border border-premiumLight-border dark:border-premiumDark-border/40"
                delay={index * 0.1}
                hoverLift={true}
              >
                {/* Count Up value */}
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                
                <span className="text-sm font-semibold font-outfit text-premiumLight-text dark:text-premiumDark-text mt-3">
                  {stat.label}
                </span>
              </GlassCard>
            ))}
            
            {/* Ambient visual badge on stats */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="sm:col-span-2 p-5 rounded-2xl bg-gradient-to-r from-premiumLight-primary/5 to-premiumLight-accent/5 dark:from-premiumDark-accent/5 dark:to-premiumDark-secondary/5 border border-dashed border-premiumLight-primary/30 dark:border-premiumDark-accent/30 flex items-center justify-center space-x-3 text-sm font-medium font-outfit text-premiumLight-primary dark:text-premiumDark-accent"
            >
              <span>🚀 Driven by continuous learning and clean code standards</span>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
