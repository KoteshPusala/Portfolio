import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
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

// Helper component to render all sections sequentially
const MainContent = () => {
  return (
    <>
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
    </>
  );
};

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      // Get section ID from the pathname (e.g. "/about" -> "about")
      const sectionId = pathname === '/' ? 'home' : pathname.substring(1);
      const element = document.getElementById(sectionId);
      
      if (element) {
        const offset = 80; // Height of sticky navbar
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else if (pathname === '/') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    // Run after a short delay to ensure React DOM elements are fully mounted
    const timer = setTimeout(scrollToSection, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

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
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/about" element={<MainContent />} />
            <Route path="/skills" element={<MainContent />} />
            <Route path="/projects" element={<MainContent />} />
            <Route path="/experience" element={<MainContent />} />
            <Route path="/education" element={<MainContent />} />
            <Route path="/achievements" element={<MainContent />} />
            <Route path="/certifications" element={<MainContent />} />
            <Route path="/services" element={<MainContent />} />
            <Route path="/contact" element={<MainContent />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer & Back to top button */}
        <Footer />
        <ScrollToTop />

      </div>
    </ThemeProvider>
  );
}

export default App;
