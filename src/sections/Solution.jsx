import { CheckCircle, Zap, Smartphone, Search, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Solution = () => {
  const { t } = useTranslation();
  
  const benefits = [
    {
      icon: Zap,
      title: t('solution.b1_title'),
      description: t('solution.b1_desc')
    },
    {
      icon: Search,
      title: t('solution.b2_title'),
      description: t('solution.b2_desc')
    },
    {
      icon: Smartphone,
      title: t('solution.b3_title'),
      description: t('solution.b3_desc')
    },
    {
      icon: TrendingUp,
      title: t('solution.b4_title'),
      description: t('solution.b4_desc')
    }
  ];

  const whatsappMessage = encodeURIComponent(t('hero.whatsapp_message'));

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('solution.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('solution.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="animate-on-scroll bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('solution.cta_title')}
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('solution.cta_desc')}
          </p>
          <a
            href={`https://wa.me/212612236660?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
          >
            {t('solution.cta_btn')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solution;