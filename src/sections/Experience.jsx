import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';

export const Experience = () => {
  return (
    <section 
      id="experience" 
      className="relative py-24 px-6 overflow-hidden bg-premiumLight-bg dark:bg-premiumDark-bg"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          title="Work Experience"
          subtitle="Timeline"
          description="My internship history, developer roles, and practical software engineering journey."
        />

        {/* Timeline container */}
        <div className="relative border-l border-premiumLight-border dark:border-slate-800 ml-4 md:ml-8 space-y-12">
          
          {experienceData.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              
              {/* Timeline Marker (Circle node) */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute left-0 top-2 -translate-x-1/2 w-6 h-6 rounded-full bg-premiumLight-bg dark:bg-premiumDark-bg border-4 border-premiumLight-primary dark:border-premiumDark-accent flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.3)] z-10 transition-transform group-hover:scale-125"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-premiumLight-primary dark:bg-premiumDark-accent" />
              </motion.div>

              {/* Experience Card */}
              <GlassCard
                className="border border-premiumLight-border dark:border-premiumDark-border/40"
                delay={index * 0.1}
                hoverLift={true}
              >
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-4 border-b border-premiumLight-border dark:border-slate-800">
                  <div className="text-left">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-premiumLight-primary/10 dark:bg-premiumDark-accent/15 text-premiumLight-primary dark:text-premiumDark-accent mb-2 font-outfit">
                      {exp.type === 'internship' ? 'Internship' : 'Learning Journey'}
                    </span>
                    <h3 className="text-xl font-bold font-poppins text-premiumLight-text dark:text-premiumDark-text">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold font-outfit text-premiumLight-primary dark:text-premiumDark-accent mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Meta (Duration/Location) */}
                  <div className="flex flex-col items-start md:items-end gap-1.5 text-xs text-premiumLight-muted dark:text-premiumDark-muted font-outfit font-medium">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-premiumLight-muted dark:text-premiumDark-muted text-left mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements points */}
                <ul className="space-y-2.5 text-left">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-premiumLight-text dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-premiumLight-primary dark:text-premiumDark-accent mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </GlassCard>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;
