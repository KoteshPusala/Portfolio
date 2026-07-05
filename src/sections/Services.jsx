import React from 'react';
import { Layout, Server, Cpu, Database, Flame, Smartphone } from 'lucide-react';
import { servicesData } from '../data/portfolioData';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';

const iconMap = {
  Layout: <Layout className="w-8 h-8 text-blue-500" />,
  Server: <Server className="w-8 h-8 text-emerald-500" />,
  Cpu: <Cpu className="w-8 h-8 text-purple-500" />,
  Database: <Database className="w-8 h-8 text-amber-500" />,
  Flame: <Flame className="w-8 h-8 text-orange-500" />,
  Smartphone: <Smartphone className="w-8 h-8 text-rose-500" />
};

export const Services = () => {
  return (
    <section 
      id="services" 
      className="relative py-24 px-6 overflow-hidden bg-premiumLight-bg dark:bg-premiumDark-bg"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          title="What I Offer"
          subtitle="Services"
          description="High-quality, modular, and performance-optimized full-stack engineering services tailored to modern web and AI applications."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          
          {servicesData.map((service, index) => {
            const icon = iconMap[service.icon] || <Layout className="w-8 h-8" />;
            
            return (
              <GlassCard
                key={index}
                className="flex flex-col space-y-4 border border-premiumLight-border dark:border-premiumDark-border/40 p-8 text-left"
                delay={index * 0.05}
                hoverLift={true}
              >
                {/* Visual Icon container */}
                <div className="p-3 w-fit rounded-2xl bg-premiumLight-primary/5 dark:bg-premiumDark-accent/5 border border-premiumLight-primary/10 dark:border-premiumDark-accent/10">
                  {icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold font-poppins text-premiumLight-text dark:text-premiumDark-text">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-premiumLight-muted dark:text-premiumDark-muted leading-relaxed">
                  {service.description}
                </p>
              </GlassCard>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Services;
