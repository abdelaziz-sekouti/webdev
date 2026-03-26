import { Globe, FileText, Search, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ServiceCard from '../components/ServiceCard';

const ServicesPreview = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Globe,
      title: t('services_preview.s1_title'),
      description: t('services_preview.s1_desc'),
      benefits: [
        t('services_preview.s1_b1'),
        t('services_preview.s1_b2'),
        t('services_preview.s1_b3')
      ],
      ctaLink: '/services'
    },
    {
      icon: FileText,
      title: t('services_preview.s2_title'),
      description: t('services_preview.s2_desc'),
      benefits: [
        t('services_preview.s2_b1'),
        t('services_preview.s2_b2'),
        t('services_preview.s2_b3')
      ],
      ctaLink: '/services'
    },
    {
      icon: Search,
      title: t('services_preview.s3_title'),
      description: t('services_preview.s3_desc'),
      benefits: [
        t('services_preview.s3_b1'),
        t('services_preview.s3_b2'),
        t('services_preview.s3_b3')
      ],
      ctaLink: '/services'
    },
    {
      icon: Wrench,
      title: t('services_preview.s4_title'),
      description: t('services_preview.s4_desc'),
      benefits: [
        t('services_preview.s4_b1'),
        t('services_preview.s4_b2'),
        t('services_preview.s4_b3')
      ],
      ctaLink: '/services'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('services_preview.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('services_preview.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 100} />
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Link
            to="/services"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            {t('services_preview.view_all')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;