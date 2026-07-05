import React from 'react';
import { Trophy, Code2, ShieldAlert, Award, Star } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';

const iconMap = {
  0: <Trophy className="w-8 h-8 text-yellow-500" />,
  1: <Code2 className="w-8 h-8 text-blue-500" />,
  2: <Star className="w-8 h-8 text-purple-500" />,
  3: <Award className="w-8 h-8 text-emerald-500" />,
  4: <Award className="w-8 h-8 text-rose-500" />
};

export const Achievements = () => {
  return (
    <section 
      id="achievements" 
      className="relative py-24 px-6 overflow-hidden bg-premiumLight-bg dark:bg-premiumDark-bg"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          title="Achievements"
          subtitle="Milestones"
          description="Competitive programming statistics, examination qualifications, and hackathon ranks."
        />

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          
          {achievementsData.map((achievement, index) => {
            const icon = iconMap[index] || <Award className="w-8 h-8" />;
            
            return (
              <GlassCard
                key={index}
                className="flex flex-col justify-between border border-premiumLight-border dark:border-premiumDark-border/40 p-8 text-left"
                delay={index * 0.1}
                hoverLift={true}
              >
                <div className="space-y-6">
                  {/* Top Row: Icon & Large Metric Badge */}
                  <div className="flex justify-between items-start">
                    <div className="p-3 rounded-2xl bg-premiumLight-primary/5 dark:bg-premiumDark-accent/5 border border-premiumLight-primary/10 dark:border-premiumDark-accent/10">
                      {icon}
                    </div>
                    
                    <span className="text-sm font-extrabold font-outfit px-3 py-1 rounded-full bg-premiumLight-primary/10 dark:bg-premiumDark-accent/15 text-premiumLight-primary dark:text-premiumDark-accent border border-premiumLight-primary/20 dark:border-premiumDark-accent/20">
                      {achievement.metric}
                    </span>
                  </div>
                  
                  {/* Text Details */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-poppins text-premiumLight-text dark:text-premiumDark-text">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-premiumLight-muted dark:text-premiumDark-muted leading-relaxed">
                      {achievement.detail}
                    </p>
                  </div>
                </div>

              </GlassCard>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Achievements;
