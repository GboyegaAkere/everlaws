import { MessageCircle } from "lucide-react";

export default function SMSButton() {
  // Include country code.
  const phoneNumber = "+19103689373"; // Replace with your phone number

  const message = encodeURIComponent(
    "Hello, I would like to learn more about your services."
  );

  const smsUrl = `sms:${phoneNumber}?body=${message}`;

  return (
    <a
      href={smsUrl}
      aria-label="Text us"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
    >
      <MessageCircle size={28} strokeWidth={2} />
    </a>
  );
}
