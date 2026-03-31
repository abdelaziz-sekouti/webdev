import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PortfolioCard = ({ project, delay = 0 }) => {
  const { t } = useTranslation();
  return (
    <div 
      className="animate-on-scroll group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-2 transition-colors"
            >
              {t('portfolio.view_project')} <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-2">
              {t('portfolio.view_project')} <ExternalLink className="w-4 h-4" />
            </span>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          {t(`portfolio.p${project.id}_title`)}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
          {t(`portfolio.p${project.id}_desc`)}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;