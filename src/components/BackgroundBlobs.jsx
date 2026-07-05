import React from 'react';

export const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-100" />
      
      {/* Radial Gradient overlay to mask the edges of the grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_90%_at_50%_0%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_90%_90%_at_50%_0%,rgba(59,130,246,0.05),rgba(11,17,32,0))]" />

      {/* Floating Blob 1 - Top Left */}
      <div className="absolute top-[10%] left-[-10%] md:left-[5%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-premiumLight-primary/6 dark:bg-premiumDark-accent/6 blur-[100px] md:blur-[150px] animate-blob" />

      {/* Floating Blob 2 - Middle Right */}
      <div className="absolute top-[35%] right-[-10%] md:right-[5%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full bg-premiumLight-accent/5 dark:bg-premiumDark-secondary/5 blur-[120px] md:blur-[180px] animate-blob [animation-delay:2s]" />

      {/* Floating Blob 3 - Bottom Left */}
      <div className="absolute bottom-[20%] left-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-premiumLight-primary/4 dark:bg-premiumDark-accent/4 blur-[90px] md:blur-[130px] animate-blob [animation-delay:4s]" />

      {/* Floating Blob 4 - Bottom Center */}
      <div className="absolute bottom-[5%] right-[20%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-premiumLight-accent/3 dark:bg-premiumDark-secondary/3 blur-[100px] md:blur-[140px] animate-blob [animation-delay:6s]" />

      {/* Subtle lines/shapes inside background */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-premiumLight-border dark:via-premiumDark-border to-transparent opacity-30" />
    </div>
  );
};

export default BackgroundBlobs;
