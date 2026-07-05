import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import BackgroundBlobs from './components/BackgroundBlobs';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen transition-colors duration-300 text-premiumLight-text dark:text-premiumDark-text font-sans overflow-x-hidden selection:bg-premiumLight-primary/20 dark:selection:bg-premiumDark-accent/30 selection:text-premiumLight-primary dark:selection:text-premiumDark-accent">
        
        {/* Global Background system */}
        <BackgroundBlobs />

        {/* Scroll Progress Bar at the top */}
        <ScrollProgress />
        
        {/* Custom cursor (Hidden on mobile/tablet) */}
        <CustomCursor />
        
        {/* Sticky Glassmorphic Navbar */}
        <Navbar />

        {/* Main Content Layout */}
        <main className="relative z-10 w-full flex flex-col">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <Certifications />
          <Services />
          <Contact />
        </main>

        {/* Footer & Back to top button */}
        <Footer />
        <ScrollToTop />

      </div>
    </ThemeProvider>
  );
}

export default App;
