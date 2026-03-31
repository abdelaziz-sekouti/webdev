import { useEffect, useState } from 'react';

const ParallaxSection = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('parallax-image');
      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollPercent = rect.top / window.innerHeight;
        setOffset(scrollPercent * 50);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80')] bg-cover bg-center" style={{ transform: `translateY(${offset}px)` }}></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-pulse">
          Transformez vos idées en réalité digitale
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Du concept au déploiement, nous créons des expériences web qui captivent vos clients
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">React</span>
          <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">Node.js</span>
          <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">Tailwind CSS</span>
          <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">Vite</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-slate-950 to-transparent"></div>
    </section>
  );
};

export default ParallaxSection;
