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
    description: "Site vitrine elegent pour un restaurant traditionnel à Marrakech avec réservation en ligne.",
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
  },
  {
    "id": 7,
    "title": "Agence de Voyage Sahara",
    "description": "Site de réservation pour une agence de voyage spécialisée dans les circuits au Sahara.",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
    "tags": [
      "Voyage",
      "Réservation",
      "Tourisme"
    ],
    "category": "voyage",
    "url": "https://sahara-travel.vercel.app/"
  },
  {
    "id": 8,
    "title": "Blog Lifestyle",
    "description": "Blog personnel sur le lifestyle avec articles, galerie photo et section de commentaires.",
    "image": "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?w=600&h=400&fit=crop",
    "tags": [
      "Blog",
      "Lifestyle",
      "Articles"
    ],
    "category": "blog",
    "url": "https://lifestyle-blog.vercel.app/"
  },
  {
    "id": 9,
    "title": "Portfolio Artiste",
    "description": "Site de portfolio pour un artiste avec galerie d'œuvres, biographie et contact.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    "tags": [
      "Portfolio",
      "Artiste",
      "Galerie"
    ],
    "category": "autre",
    "url": "https://artiste-portfolio.vercel.app/"
  },
  {
    "id": 10,
    "title": "Application de Fitness",
    "description": "Application web pour suivre les entraînements et la nutrition avec interface conviviale.",
    "image": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D?w=600&h=400&fit=crop",
    "tags": [
      "Fitness",
      "Nutrition",
      "Suivi"
    ],
    "category": "sante",
    "url": "https://fitness-app.vercel.app/"
  },
  {
    "id": 11,
    "title": "Site de Photographie",
    "description": "Site pour un photographe professionnel avec portfolio, tarifs et formulaire de contact.",
    "image": "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&h=400&fit=crop",
    "tags": [
      "Photographie",
      "Portfolio",
      "Contact"
    ],
    "category": "autre",
    "url": "https://photography-site.vercel.app/"
  },
  {
    "id": 12,
    "title": "Application de Recettes",
    "description": "Application web pour partager et découvrir des recettes de cuisine avec fonctionnalités sociales.",
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2l0Y2hlbiUyMGNvb2tpbmd8ZW58MHx8MHx8fDA%3D?w=600&h=400&fit=crop",
    "tags": [
      "Recettes",
      "Cuisine",
      "Social"
    ],
    "category": "autre",
    "url": "https://recipe-app.vercel.app/"
  },
  {
    "id": 13,
    "title": "Site de Yoga en Ligne",
    "description": "Plateforme de cours de yoga en ligne avec vidéos, horaires et abonnement.",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
    "tags": [
      "Yoga",
      "Cours en ligne",
      "Abonnement"
    ],
    "category": "sante",
    "url": "https://yoga-online.vercel.app/"
  },
  {
    "id": 14,
    "title": "Site de Musique Indépendante",
    "description": "Site pour un label de musique indépendante avec catalogue d'artistes, albums et boutique.",
    "image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop",
    "tags": [
      "Musique",
      "Indépendante",
      "Boutique"
    ],
    "category": "autre",
    "url": "https://independent-music.vercel.app/"
  },
  {
    "id": 15,
    "title": "Application de Gestion de Projets",
    "description": "Application web pour gérer des projets avec tâches, calendrier et collaboration en équipe.",
    "image": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop",
    "tags": [
      "Gestion de projets",
      "Collaboration",
      "Productivité"
    ],
    "category": "autre",
    "url": "https://project-management-app.vercel.app/"
  },
  {
    "id": 16,
    "title": "Site de Mode Durable",
    "description": "Boutique en ligne pour une marque de mode durable avec produits éco-responsables et blog.",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=400&fit=crop",
    "tags": [
      "Mode durable",
      "E-commerce",
      "Blog"
    ],
    "category": "e-commerce",
    "url": "https://sustainable-fashion.vercel.app/"
  },
  {
    "id": 17,
    "title": "Site de Coaching Personnel",
    "description": "Site pour un coach personnel avec présentation des services, témoignages et prise de rendez-vous.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    "tags": [
      "Coaching",
      "Personnel",
      "Rendez-vous"
    ],
    "category": "autre",
    "url": "https://personal-coaching.vercel.app/"
  },
  {
    "id": 18,
    "title": "Application de Méditation",
    "description": "Application web pour la méditation avec sessions guidées, suivi de progrès et communauté.",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
    "tags": [
      "Méditation",
      "Bien-être",
      "Communauté"
    ],
    "category": "sante",
    "url": "https://meditation-app.vercel.app/"
  }
];

const Portfolio = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 6;

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === filter);
  const totalPages = Math.ceil(filteredProjects.length / pageSize);
  const pagedProjects = filteredProjects.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

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
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400-hover:bg-blue-50 dark:hover:bg-slate-700'
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
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-8 animate-on-scroll">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Our Portfolio
            </h2>
          </div>

          {filteredProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pagedProjects.map((project) => (
                  <PortfolioCard key={project.id} project={project} />
                ))}
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
                  className="px-3 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-800 disabled:opacity-50"
                  disabled={currentPage === 0}
                >
                  Previous
                </button>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Page {currentPage + 1}
                </span>
                <button
                  type="button"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))}
                  className="px-3 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-800"
                  disabled={currentPage >= totalPages - 1}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
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
    </div>);
}

export default Portfolio;