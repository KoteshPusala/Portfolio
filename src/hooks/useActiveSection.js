import { useState, useEffect } from 'react';

export const useActiveSection = (sectionIds, options = { threshold: 0.25, rootMargin: '-20% 0px -40% 0px' }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observers = [];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, [sectionIds, options]);

  return activeSection;
};
export default useActiveSection;
