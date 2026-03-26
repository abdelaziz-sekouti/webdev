import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '212612236660';
  const message = "Bonjour, je suis intéressé par vos services de développement web. Pouvez-vous me contacter ?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 animate-bounce"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;