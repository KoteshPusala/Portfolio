import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';

export const Certifications = () => {
  return (
    <section 
      id="certifications" 
      className="relative py-20 px-6 overflow-hidden bg-premiumLight-bg dark:bg-premiumDark-bg"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          title="Certifications"
          subtitle="Qualifications"
          description="Verified course credentials and specialized technological certifications from Oracle, Coursera, and HackerRank."
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          
          {certificationsData.map((cert) => (
            <GlassCard
              key={cert.id}
              className="flex flex-col justify-between border border-premiumLight-border dark:border-premiumDark-border/40 p-8 text-left relative overflow-hidden group"
              hoverLift={true}
            >
              {/* Background abstract decoration */}
              <div className="absolute right-0 bottom-0 translate-x-6 translate-y-6 w-24 h-24 bg-gradient-to-br from-premiumLight-primary/5 to-transparent rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              
              <div className="space-y-6 relative z-10">
                {/* Header Badge */}
                <div className="flex justify-between items-center">
                  <div className="p-3 rounded-2xl bg-premiumLight-accent/5 dark:bg-premiumDark-secondary/5 border border-premiumLight-accent/15 dark:border-premiumDark-secondary/15">
                    <ShieldCheck className="w-6 h-6 text-premiumLight-accent dark:text-premiumDark-secondary" />
                  </div>
                  
                  <span className="text-[10px] font-bold font-outfit uppercase tracking-wider px-2.5 py-1 rounded-full bg-premiumLight-accent/10 dark:bg-premiumDark-secondary/15 text-premiumLight-accent dark:text-premiumDark-secondary border border-premiumLight-accent/20 dark:border-premiumDark-secondary/20">
                    {cert.badge}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <h3 className="text-base font-bold font-poppins text-premiumLight-text dark:text-premiumDark-text leading-snug">
                    {cert.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-premiumLight-muted dark:text-premiumDark-muted">
                    <span className="font-semibold text-premiumLight-text dark:text-slate-300">{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>

            </GlassCard>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certifications;
