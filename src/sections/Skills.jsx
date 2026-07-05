import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Settings, Cpu, BookOpen } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';

// Mapping icons to categories
const categoryConfig = {
  programming: {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    span: "lg:col-span-4",
    skills: skillsData.programming
  },
  frontend: {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    span: "lg:col-span-8",
    skills: skillsData.frontend
  },
  backend: {
    title: "Backend Development",
    icon: <Server className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
    span: "lg:col-span-5",
    skills: skillsData.backend
  },
  databases: {
    title: "Databases",
    icon: <Database className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
    span: "lg:col-span-3",
    skills: skillsData.databases
  },
  tools: {
    title: "Tools & Deployments",
    icon: <Settings className="w-6 h-6 text-rose-500 dark:text-rose-400" />,
    span: "lg:col-span-4",
    skills: skillsData.tools
  },
  aiMl: {
    title: "AI & Machine Learning",
    icon: <Cpu className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
    span: "lg:col-span-6",
    skills: skillsData.aiMl
  },
  coreCs: {
    title: "Core Computer Science",
    icon: <BookOpen className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
    span: "lg:col-span-6",
    skills: skillsData.coreCs
  }
};

const SkillBar = ({ name, level }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-outfit">
        <span className="font-medium text-premiumLight-text dark:text-premiumDark-text">{name}</span>
        <span className="text-premiumLight-muted dark:text-premiumDark-muted">{level}%</span>
      </div>
      
      {/* Track */}
      <div className="w-full h-2 rounded-full bg-premiumLight-border dark:bg-slate-800 overflow-hidden">
        {/* Fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-premiumLight-primary to-premiumLight-accent dark:from-premiumDark-accent dark:to-premiumDark-secondary"
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section 
      id="skills" 
      className="relative py-24 px-6 overflow-hidden bg-premiumLight-bg dark:bg-premiumDark-bg"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          title="Technical Skills"
          subtitle="Expertise"
          description="My engineering capabilities grouped by technology layers, programming competencies, and core fundamentals."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mt-8">
          
          {Object.entries(categoryConfig).map(([key, config], cardIdx) => (
            <GlassCard
              key={key}
              className={`flex flex-col space-y-6 border border-premiumLight-border dark:border-premiumDark-border/40 ${config.span}`}
              delay={cardIdx * 0.05}
              hoverLift={true}
            >
              {/* Card Title Header */}
              <div className="flex items-center space-x-3 pb-3 border-b border-premiumLight-border dark:border-slate-800">
                <div className="p-2 rounded-xl bg-premiumLight-card dark:bg-[#131b2e] border border-premiumLight-border/50 dark:border-premiumDark-border/60">
                  {config.icon}
                </div>
                <h3 className="text-lg font-bold font-poppins text-premiumLight-text dark:text-premiumDark-text">
                  {config.title}
                </h3>
              </div>

              {/* Card Skills List */}
              <div className="flex-1 grid grid-cols-1 gap-4">
                {config.skills.map((skill, skillIdx) => (
                  <SkillBar 
                    key={skillIdx}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </GlassCard>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;
