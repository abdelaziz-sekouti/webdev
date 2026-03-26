import { Gift, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Offer = () => {
  const { t } = useTranslation();
  const whatsappMessage = encodeURIComponent(t('hero.whatsapp_message'));

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 dark:bg-amber-900/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 dark:bg-blue-900/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Gift className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Gift className="w-4 h-4" />
                {t('offer.badge')}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                {t('offer.title')}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-xl">
                {t('offer.desc')}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <a
                  href={`https://wa.me/212612236660?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg"
                >
                  <Gift className="mr-2 w-5 h-5" />
                  {t('offer.btn')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <span className="text-sm text-slate-500 dark:text-slate-500">
                  {t('offer.footer')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;