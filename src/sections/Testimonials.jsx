import { useTranslation } from 'react-i18next';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t('testimonials.t1_name'),
      role: t('testimonials.t1_role'),
      content: t('testimonials.t1_content'),
      rating: 5
    },
    {
      name: t('testimonials.t2_name'),
      role: t('testimonials.t2_role'),
      content: t('testimonials.t2_content'),
      rating: 5
    },
    {
      name: t('testimonials.t3_name'),
      role: t('testimonials.t3_role'),
      content: t('testimonials.t3_content'),
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;