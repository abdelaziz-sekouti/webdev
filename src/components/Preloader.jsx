import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setShouldRender(false), 800); // Wait for fade-out animation
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#E2725B] dark:bg-[#2D1B16] transition-opacity duration-700 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Decorative Zellij Pattern (Stylized SVG) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="zellij" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 0l40 40-40 40-40-40z" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M0 40h80M40 0v80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#zellij)" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Arabic Welcome */}
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-wider animate-marhaba">
          مرحباً
        </h2>
        
        {/* Welcome Text */}
        <div className="flex flex-col items-center">
          <p className="text-xl md:text-2xl font-light text-[#F5E6D3] mb-6 opacity-0 animate-reveal delay-300">
            Marhaba
          </p>
          
          <div className="h-[2px] bg-[#C5A022] mb-6 animate-line" />
          
          <p className="text-lg md:text-xl font-medium text-white/90 tracking-wide opacity-0 animate-reveal delay-500">
            Welcoming you from Marrakech
          </p>
          
          <p className="text-sm text-white/60 mt-4 font-light tracking-[0.2em] uppercase opacity-0 animate-reveal delay-700">
            Sekouti Abdelaziz • DevWeb
          </p>
        </div>
      </div>
      
      {/* Loading Bar (Subtle) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-white transition-all duration-[2500ms] ease-out w-full" />
      </div>
    </div>
  );
};

export default Preloader;
