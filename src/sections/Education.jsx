import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';

export const Education = () => {
  return (
    <section 
      id="education" 
      className="relative py-24 px-6 overflow-hidden bg-premiumLight-bg dark:bg-premiumDark-bg"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          title="Education"
          subtitle="Academics"
          description="My formal academic credentials, major coursework, and scholastic milestones."
        />

        {/* Timeline container */}
        <div className="relative border-l border-premiumLight-border dark:border-slate-800 ml-4 md:ml-8 space-y-12">
          
          {educationData.map((edu, index) => (
            <div key={edu.id} className="relative pl-8 md:pl-12 group">
              
              {/* Timeline Marker (Circle node) */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute left-0 top-2 -translate-x-1/2 w-6 h-6 rounded-full bg-premiumLight-bg dark:bg-premiumDark-bg border-4 border-premiumLight-accent dark:border-premiumDark-secondary flex items-center justify-center shadow-[0_0_12px_rgba(139,92,246,0.3)] z-10 transition-transform group-hover:scale-125"
              >
                <GraduationCap className="w-3.5 h-3.5 text-premiumLight-accent dark:text-premiumDark-secondary" />
              </motion.div>

              {/* Education Card */}
              <GlassCard
                className="border border-premiumLight-border dark:border-premiumDark-border/40"
                delay={index * 0.1}
                hoverLift={true}
              >
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-4 border-b border-premiumLight-border dark:border-slate-800">
                  <div className="text-left">
                    <h3 className="text-xl font-bold font-poppins text-premiumLight-text dark:text-premiumDark-text">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold font-outfit text-premiumLight-primary dark:text-premiumDark-accent mt-0.5">
                      {edu.major}
                    </p>
                    <p className="text-sm text-premiumLight-muted dark:text-slate-400 mt-1">
                      {edu.school}
                    </p>
                  </div>
                  
                  {/* Meta (Duration/Location) */}
                  <div className="flex flex-col items-start md:items-end gap-1.5 text-xs text-premiumLight-muted dark:text-premiumDark-muted font-outfit font-medium">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Score section */}
                <div className="flex items-center space-x-2 bg-premiumLight-primary/5 dark:bg-premiumDark-accent/5 border border-premiumLight-primary/10 dark:border-premiumDark-accent/10 px-4 py-2 rounded-xl self-start w-fit mb-5">
                  <Award className="w-4 h-4 text-premiumLight-primary dark:text-premiumDark-accent" />
                  <span className="text-xs font-semibold font-outfit text-premiumLight-primary dark:text-premiumDark-accent">
                    Performance: {edu.score}
                  </span>
                </div>

                {/* Coursework title */}
                <div className="text-left mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-premiumLight-muted dark:text-premiumDark-muted font-outfit">
                    Relevant Coursework:
                  </span>
                </div>

                {/* Coursework Tags */}
                <div className="flex flex-wrap gap-2 justify-start">
                  {edu.courses.map((course, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-premiumLight-card dark:bg-[#131b2e] border border-premiumLight-border dark:border-[#1e293b] text-premiumLight-text dark:text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>

              </GlassCard>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;
