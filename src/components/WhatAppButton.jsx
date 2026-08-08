import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  // Replace with your WhatsApp number.
  // Include country code, without + or spaces.
  const phoneNumber = "+12764949802";

  const message = encodeURIComponent(
    "Hello, I would like to learn more about your services."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
    >
      <MessageCircle size={28} strokeWidth={2} />
    </a>
  );
}

