import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const { t } = useTranslation();
  
  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone_label'),
      content: '+212 612 236 660',
      description: t('contact.phone_desc')
    },
    {
      icon: Mail,
      title: t('contact.email_label'),
      content: 'sekoutiabdelaziz0@gmail.com',
      description: t('contact.email_desc')
    },
    {
      icon: MapPin,
      title: t('contact.address_label'),
      content: 'Derb Boualam 185 S.Y.B.A. , Marrakech 40050, Maroc',
      description: t('contact.address_desc')
    },
    {
      icon: Clock,
      title: t('contact.hours_label'),
      content: t('contact.hours_desc'),
      description: t('contact.hours_dim')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                {t('contact.form_title')}
              </h2>
              <ContactForm />
            </div>

            <div className="animate-on-scroll delay-200">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                {t('contact.info_title')}
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {info.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {info.content}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-500">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-8 h-8" />
                  <h3 className="text-xl font-bold">{t('contact.whatsapp_title')}</h3>
                </div>
                <p className="text-green-100 mb-6">
                  {t('contact.whatsapp_desc')}
                </p>
                <a
                  href={`https://wa.me/212612236660?text=${encodeURIComponent(t('hero.whatsapp_message'))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  {t('contact.whatsapp_btn')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            {t('contact.call_title')}
          </h2>
          <p className="text-slate-400 mb-6">
            {t('contact.call_subtitle')}
          </p>
          <a
            href="tel:+212612236660"
            className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300"
          >
            <Phone className="mr-2 w-5 h-5" />
            +212 612 236 660
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;