import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

// Local asset imports
import nutriguardImg from '../assets/nutriguard_preview.png';
import skillbridgeImg from '../assets/skillbridge_preview.png';
import taskflowImg from '../assets/taskflow_preview.png';

const imageMap = {
  1: nutriguardImg,
  2: skillbridgeImg,
  3: taskflowImg
};

export const Projects = () => {
  return (
    <section 
      id="projects" 
      className="relative py-24 px-6 overflow-hidden bg-premiumLight-bg dark:bg-premiumDark-bg"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          title="Featured Projects"
          subtitle="My Work"
          description="A curation of premium, functional software applications built with modern frontend technologies, robust backend architectures, and AI integrations."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          
          {projectsData.map((project, index) => {
            const projectImage = imageMap[project.id];
            
            return (
              <GlassCard
                key={project.id}
                className="flex flex-col h-full border border-premiumLight-border dark:border-premiumDark-border/40 !p-0 group"
                delay={index * 0.15}
                hoverLift={true}
              >
                {/* Project Image Header */}
                <div className="relative aspect-video overflow-hidden bg-slate-900 border-b border-premiumLight-border dark:border-slate-800">
                  <motion.img 
                    src={projectImage} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Category overlay */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-slate-900/80 dark:bg-premiumDark-card/85 text-premiumLight-primary dark:text-premiumDark-accent border border-premiumLight-primary/30 dark:border-premiumDark-accent/30 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex-1 p-6 flex flex-col justify-between text-left">
                  <div className="space-y-4">
                    {/* Title */}
                    <h3 className="text-xl font-bold font-poppins text-premiumLight-text dark:text-premiumDark-text group-hover:text-premiumLight-primary dark:group-hover:text-premiumDark-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-premiumLight-muted dark:text-premiumDark-muted leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights bullet list */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-premiumLight-muted dark:text-premiumDark-muted font-outfit">
                        Key Features:
                      </span>
                      <ul className="space-y-1.5">
                        {project.highlights.slice(0, 3).map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start space-x-2 text-xs text-premiumLight-text dark:text-slate-300">
                            <CheckCircle className="w-3.5 h-3.5 text-premiumLight-primary dark:text-premiumDark-accent mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Tags */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-premiumLight-muted dark:text-premiumDark-muted font-outfit">
                        Built With:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-semibold bg-premiumLight-primary/5 dark:bg-premiumDark-accent/5 border border-premiumLight-primary/10 dark:border-premiumDark-accent/15 text-premiumLight-muted dark:text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Action Links */}
                  <div className="flex items-center gap-4 pt-6 mt-6 border-t border-premiumLight-border dark:border-slate-800">
                    <Button 
                      variant="outline" 
                      href={project.github}
                      className="flex-1 py-2 px-3 text-xs"
                      icon={<FaGithub className="w-4 h-4" />}
                    >
                      GitHub
                    </Button>
                    <Button 
                      variant="primary" 
                      href={project.live}
                      className="flex-1 py-2 px-3 text-xs"
                      icon={<ExternalLink className="w-4 h-4" />}
                    >
                      Live Demo
                    </Button>
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

export default Projects;
