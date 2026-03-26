import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const phoneNumber = '212612236660';
  const messageMap = {
    fr: "Bonjour, je voudrais recevoir un audit gratuit de ma présence en ligne.",
    en: "Hello, I would like to receive a free audit of my online presence.",
    ar: "مرحباً، أود الحصول على تدقيق مجاني لتواجدي الرقمي.",
    es: "Hola, me gustaría recibir una auditoría gratuita de mi presencia en línea.",
    it: "Buongiorno, vorrei ricevere un audit gratuito della mia presenza online.",
    nl: "Hallo, ik zou graag een gratis audit van mijn online aanwezigheid ontvangen.",
    de: "Hallo, ich möchte ein kostenloses Audit meiner Online-Präsenz erhalten.",
    hi: "नमस्ते, मुझे अपनी ऑनलाइन उपस्थिति का मुफ्त ऑडिट प्राप्त करना है।",
    pt: "Olá, gostaria de receber uma auditoria gratuita da minha presença online."
  };
  const message = messageMap[i18n.language] || messageMap.fr;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-200/30 dark:bg-amber-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {t('hero.badge')}
            </span>
          </div>
          
          <h1 className="animate-on-scroll delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            {t('hero.title_part1')}{' '}
            <span className="text-blue-600 dark:text-blue-400">{t('hero.title_part2')}</span>
          </h1>
          
          <p className="animate-on-scroll delay-200 text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          <div className="animate-on-scroll delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all hover:shadow-xl hover:scale-105"
            >
              <Sparkles className="mr-2 w-5 h-5" />
              {t('hero.cta_audit')}
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:border-green-500 hover:text-green-600 transition-all hover:shadow-lg"
            >
              <MessageCircle className="mr-2 w-5 h-5 text-green-500" />
              {t('hero.cta_whatsapp')}
            </a>
          </div>

          <div className="animate-on-scroll delay-400 mt-16 flex items-center justify-center gap-8 text-sm text-slate-500 dark:text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{t('hero.fast_response')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>{t('hero.free_quote')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span>{t('hero.guarantee')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-slate-400 dark:bg-slate-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;