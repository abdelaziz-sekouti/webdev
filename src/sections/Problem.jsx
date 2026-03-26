import { AlertTriangle, Instagram, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Problem = () => {
  const { t } = useTranslation();
  
  const problems = [
    {
      icon: AlertTriangle,
      title: t('problem.p1_title'),
      description: t('problem.p1_desc')
    },
    {
      icon: Instagram,
      title: t('problem.p2_title'),
      description: t('problem.p2_desc')
    },
    {
      icon: TrendingUp,
      title: t('problem.p3_title'),
      description: t('problem.p3_desc')
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('problem.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('problem.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="animate-on-scroll bg-red-50 dark:bg-red-900/10 rounded-2xl p-8 border border-red-100 dark:border-red-900/20"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-6">
                <problem.icon className="w-7 h-7 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;