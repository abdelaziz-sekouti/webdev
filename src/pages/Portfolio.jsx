import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PortfolioCard from '../components/PortfolioCard';

const projectsData = [
  {
    id: 1,
    title: "E-commerce Mode Élégance",
    description: "Boutique en ligne pour une marque de vêtements traditionnelle avec panier sécurisé et paiement en ligne.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    tags: ["E-commerce", "React", "Paiement"],
    category: "e-commerce",
    url: "https://marrecom.netlify.app/products"
  },
  {
    id: 2,
    title: "Restaurant Dar Essalam",
    description: "Site vitrine elegant pour un restaurant traditionnel à Marrakech avec réservation en ligne.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    tags: ["Restaurant", "Réservation", "SEO"],
    category: "restaurant",
    url: "https://la-table-berbere.vercel.app/"
  },
  {
    id: 3,
    title: "Agence Immobilière Ribat",
    description: "Plateforme d'annonces immobilières avec recherche avancée et fiches détaillées.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tags: ["Immobilier", "Recherche", "Filtres"],
    category: "immobilier",
    url: "https://premium-website-nine.vercel.app/"
  },
  {
    id: 4,
    title: "Landing Page Startup",
    description: "Page de conversion haute performance pour une startup fintech avec formulaire de leads.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["Landing Page", "Conversion", "Lead"],
    category: "landing",
    url: "https://landing-page-startup-five.vercel.app/"
  },
  {
    id: 5,
    title: "Cabinet Avocat Khadija",
    description: "Site professionnel pour un cabinet juridique avec présentation des services et prise de contact.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    tags: ["Juridique", "Professionnel", "Contact"],
    category: "autre",
    url: "https://cabinet-avocat-khadija.vercel.app/"
  },
  {
    id: 6,
    title: "Clinique Santé Plus",
    description: "Site pour une clinique médicale avec gestion des rendez-vous et informations pratiques.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
    tags: ["Santé", "Rendez-vous", "Médical"],
    category: "sante",
    url: "https://dr-luxe.vercel.app/"
  }
];

const Portfolio = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

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
            <button
              type="button"
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${filter === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700'
                }`}
              onClick={() => setFilter('all')}
            >
              {t('portfolio.filter_all')}
            </button>
            <button
              type="button"
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${filter === 'e-commerce'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700'
                }`}
              onClick={() => setFilter('e-commerce')}
            >
              {t('portfolio.filter_ecommerce')}
            </button>
            <button
              type="button"
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${filter === 'restaurant'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700'
                }`}
              onClick={() => setFilter('restaurant')}
            >
              {t('portfolio.filter_restaurant')}
            </button>
            <button
              type="button"
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${filter === 'immobilier'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700'
                }`}
              onClick={() => setFilter('immobilier')}
            >
              {t('portfolio.filter_immobilier')}
            </button>
            <button
              type="button"
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${filter === 'landing'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700'
                }`}
              onClick={() => setFilter('landing')}
            >
              {t('portfolio.filter_landing')}
            </button>
            <button
              type="button"
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${filter === 'sante'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700'
                }`}
              onClick={() => setFilter('sante')}
            >
              {t('portfolio.filter_sante')}
            </button>
            <button
              type="button"
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${filter === 'autre'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700'
                }`}
              onClick={() => setFilter('autre')}
            >
              {t('portfolio.filter_autre')}
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
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
            href={`https://wa.me/212612236660?text=${encodeURIComponent('Bonjour, je suis intéressé par vos services de création de site web.')}`}
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
