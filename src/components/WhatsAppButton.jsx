import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "2348143782067";
const DEFAULT_MESSAGE = "Hi Emmanuel, I came across your portfolio and would like to discuss a project with you.";

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
