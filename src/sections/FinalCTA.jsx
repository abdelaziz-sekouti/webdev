import { MessageCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FinalCTA = () => {
  const { t, i18n } = useTranslation();
  const phoneNumber = '212612236660';
  
  // Localized WhatsApp message
  const messages = {
    fr: "Bonjour, je suis prêt à lancer mon projet de site web. Pouvez-vous me contacter ?",
    en: "Hello, I am ready to start my website project. Can you contact me?",
    ar: "مرحباً، أنا مستعد لبدء مشروعي لإنشاء موقع إلكتروني. هل يمكنك الاتصال بي؟",
    es: "Hola, estoy listo para lanzar mi proyecto de sitio web. ¿Me pueden contactar?",
    it: "Ciao, sono pronto a lanciare il mio progetto di sito web. Potete contattarmi?",
    nl: "Hallo, ik ben klaar om mijn websiteproject te starten. Kunt u contact met mij opnemen?",
    de: "Hallo, ich bin bereit, mein Website-Projekt zu starten. Können Sie mich kontaktieren?",
    hi: "नमस्ते, मैं अपनी वेबसाइट परियोजना शुरू करने के लिए तैयार हूं। क्या आप मुझसे संपर्क कर सकते हैं?",
    pt: "Olá, estou pronto para iniciar o meu projeto de website. Pode contactar-me?"
  };

  const currentLang = i18n.language || 'fr';
  const message = messages[currentLang] || messages.fr;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-20 bg-blue-600 dark:bg-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('final_cta.title')}
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('final_cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all hover:shadow-lg"
            >
              <MessageCircle className="mr-2 w-6 h-6" />
              {t('final_cta.btn')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          
          <p className="mt-6 text-sm text-blue-200">
            {t('final_cta.note')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;