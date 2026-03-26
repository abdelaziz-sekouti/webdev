import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import projectsData from '../data/projects.json';
import PortfolioCard from '../components/PortfolioCard';

const Portfolio = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', label: t('portfolio.filter_all') },
    { id: 'e-commerce', label: t('portfolio.filter_ecommerce') },
    { id: 'restaurant', label: t('portfolio.filter_restaurant') },
    { id: 'immobilier', label: t('portfolio.filter_immobilier') },
    { id: 'landing', label: t('portfolio.filter_landing') },
    { id: 'sante', label: t('portfolio.filter_sante') },
    { id: 'autre', label: t('portfolio.filter_autre') }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t('portfolio.title')}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 animate-on-scroll">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  filter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <PortfolioCard key={project.id} project={project} delay={index * 100} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 dark:text-slate-500 text-lg">
                {t('portfolio.no_projects')}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('portfolio.ready_title')}
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            {t('portfolio.ready_subtitle')}
          </p>
          <a
            href={`https://wa.me/212612236660?text=${encodeURIComponent(t('hero.whatsapp_message'))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
          >
            {t('portfolio.ready_btn')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;