import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../siteConfig";

export default function WhatAppButton() {
  
  return (
    <a
      href={whatsappLink()}
      aria-label="Text us"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
    >
      <MessageCircle size={28} strokeWidth={2} />
    </a>
  );
}
