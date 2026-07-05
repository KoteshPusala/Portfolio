import React from 'react';
import { Quote } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';

export const Testimonials = () => {
  return (
    <section 
      id="testimonials" 
      className="relative py-24 px-6 overflow-hidden bg-premiumLight-bg dark:bg-premiumDark-bg"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          title="Recommendation Notes"
          subtitle="Testimonials"
          description="Read through feedback and recommendations from academic advisors, project mentors, and coding collaborators."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          
          {testimonialsData.map((test, index) => (
            <GlassCard
              key={index}
              className="flex flex-col justify-between border border-premiumLight-border dark:border-premiumDark-border/40 p-8 text-left relative"
              delay={index * 0.1}
              hoverLift={true}
            >
              {/* Quote Mark background decorator */}
              <Quote className="absolute right-6 top-6 w-12 h-12 text-premiumLight-primary/5 dark:text-premiumDark-accent/5 pointer-events-none" />
              
              <div className="space-y-6">
                {/* Quotation text */}
                <p className="text-sm md:text-base italic text-premiumLight-muted dark:text-slate-300 leading-relaxed font-sans">
                  "{test.text}"
                </p>
                
                {/* User Info footer */}
                <div className="flex items-center space-x-3.5 pt-4 border-t border-premiumLight-border dark:border-slate-800/80">
                  {/* Round initial bubble avatar */}
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-premiumLight-primary to-premiumLight-accent dark:from-premiumDark-accent dark:to-premiumDark-secondary text-white font-bold font-outfit text-sm flex items-center justify-center shadow-md">
                    {test.imageText}
                  </div>
                  
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-bold font-poppins text-premiumLight-text dark:text-premiumDark-text">
                      {test.name}
                    </span>
                    <span className="text-[11px] font-semibold font-outfit text-premiumLight-primary dark:text-premiumDark-accent">
                      {test.role}
                    </span>
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

export default Testimonials;
