import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServiceCard = ({ icon: Icon, title, description, benefits, ctaLink, delay = 0 }) => {
  const { t } = useTranslation();
  
  return (
    <div className="animate-on-scroll group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700" style={{ transitionDelay: `${delay}ms` }}>
      <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        {description}
      </p>
      <ul className="space-y-2 mb-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-sm text-slate-500 dark:text-slate-400">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
      <Link
        to={ctaLink}
        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
      >
        {t('common.learn_more')}
        <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;