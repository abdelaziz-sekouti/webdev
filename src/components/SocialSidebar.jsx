import { useState, useEffect } from 'react';
import { Github, Youtube, Instagram } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/abdelaziz-sekouti?tab=repositories',
    Icon: Github,
    color: 'hover:text-white',
    bgHover: 'hover:bg-[#333]',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@autodidactewebdev2368',
    Icon: Youtube,
    color: 'hover:text-white',
    bgHover: 'hover:bg-[#FF0000]',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/sekoutiabdelaziz/',
    Icon: Instagram,
    color: 'hover:text-white',
    bgHover: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500',
  },
];

const SocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY - 50) {
        setIsVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!hasScrolled) return null;

  return (
    <div
      className={`fixed left-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-out ${
        isVisible
          ? 'translate-x-0 opacity-100'
          : '-translate-x-full opacity-0'
      }`}
    >
      <div className="flex flex-col gap-2 bg-white dark:bg-slate-900 shadow-xl rounded-r-xl overflow-hidden">
        {socialLinks.map(({ name, href, Icon, color, bgHover }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className={`group relative p-3 text-slate-600 dark:text-slate-300 ${color} ${bgHover} transition-all duration-300 hover:translate-x-1`}
          >
            <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-125" />
            <span className="absolute left-full ml-2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialSidebar;
