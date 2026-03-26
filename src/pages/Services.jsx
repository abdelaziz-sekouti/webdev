import { Globe, FileText, Search, Wrench, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Création de site web',
      description: 'Des sites web sur mesure, modernes et performants adaptés à votre activité. Nous créons des sites qui-non seulement sont beaux, mais qui convertissent vos visiteurs en clients.',
      benefits: [
        'Design unique et personnalisé',
        'Interface conviviale et intuitive',
        'Compatible tous écrans (mobile, tablette, desktop)',
        'Temps de chargement optimisé',
        'Optimisation SEO de base',
        'Hébergement et domaine inclus'
      ],
      price: 'À partir de 2 500 MAD',
      cta: 'Demander un devis',
      ctaLink: '/contact'
    },
    {
      icon: FileText,
      title: 'Landing pages',
      description: 'Des pages de conversion haute performance conçues spécifiquement pour vos campagnes publicitaires. Chaque élément est optimisé pour maximiser votre taux de conversion.',
      benefits: [
        'Design persuasif et professionnel',
        'Call-to-action stratégiques',
        'Formulaires optimisés',
        'Temps de chargement ultra-rapide',
        'A/B testing inclus',
        'Analytics avancé'
      ],
      price: 'À partir de 1 500 MAD',
      cta: 'Créer ma landing page',
      ctaLink: '/contact'
    },
    {
      icon: Search,
      title: 'Référencement SEO',
      description: 'Optimisez votre visibilité sur Google et attirez plus de clients qualifiés sans payer pour des publicités. Le SEO est un investissement à long terme.',
      benefits: [
        'Audit SEO complet',
        'Recherche de mots-clés stratégiques',
        'Optimisation technique du site',
        'Création de contenu optimisé',
        'Stratégie de backlinks',
        'Rapports mensuels de progression'
      ],
      price: 'À partir de 800 MAD/mois',
      cta: 'Commencer le SEO',
      ctaLink: '/contact'
    },
    {
      icon: Wrench,
      title: 'Maintenance et support',
      description: 'Gardez votre site performant et sécurisé avec nos forfaits maintenance. Nous prenons en charge tous les aspects techniques pour que vous puissiez vous concentrer sur votre business.',
      benefits: [
        'Mises à jour régulières',
        'Support technique illimité',
        'Sauvegardes automatiques',
        'Sécurité et monitoring 24/7',
        'Optimisation des performances',
        'Intervention rapide'
      ],
      price: 'À partir de 300 MAD/mois',
      cta: 'Souscrire à la maintenance',
      ctaLink: '/contact'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Nos Services
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Des solutions complètes pour développer votre présence en ligne et atteindre vos objectifs commerciaux.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                          {service.title}
                        </h2>
                        <p className="text-amber-600 dark:text-amber-400 font-semibold">
                          {service.price}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-400">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <Link
                      to={service.ctaLink}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-center transition-all hover:shadow-lg"
                    >
                      {service.cta}
                    </Link>
                    <p className="text-center text-sm text-slate-500 dark:text-slate-500 mt-4">
                      Réponse sous 2h • Devis gratuit
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Vous avez des questions ?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            N'hésitez pas à nous contacter pour discuter de votre projet. Nous vous guidons vers la meilleure solution.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;