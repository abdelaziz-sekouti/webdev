import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Github, Youtube, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/abdelaziz-sekouti?tab=repositories',
    bgColor: 'hover:bg-[#333]',
    textColor: 'text-[#333]',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@autodidactewebdev2368',
    bgColor: 'hover:bg-[#FF0000]',
    textColor: 'text-[#FF0000]',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/sekoutiabdelaziz/',
    bgColor: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500',
    textColor: 'text-[#E4405F]',
  },
];

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold text-white">DevWeb</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-md">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ name, href, bgColor, textColor }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className={`group p-2.5 rounded-lg bg-slate-800 text-slate-400 ${bgColor} transition-all duration-300 hover:text-white hover:scale-110 hover:shadow-lg`}
                >
                  {name === 'GitHub' && <Github className="w-5 h-5" />}
                  {name === 'YouTube' && <Youtube className="w-5 h-5" />}
                  {name === 'Instagram' && <Instagram className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.links_title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  {t('nav.accueil')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-blue-400 transition-colors">
                  {t('nav.portfolio')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contact_title')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+212 612 236 660</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>sekoutiabdelaziz0@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Derb Boualam 185 S.Y.B.A , Marrakech 40050, Maroc</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
          <p>© {currentYear} Sekouti Abdelaziz - DevWeb. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
