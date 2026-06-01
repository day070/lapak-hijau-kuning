import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-5 py-4 text-whatsapp-foreground shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] transition-all hover:scale-105 hover:shadow-2xl"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40" />
        <MessageCircle className="relative h-6 w-6" fill="currentColor" />
      </span>
      <span className="hidden font-semibold sm:inline">Chat WhatsApp</span>
    </a>
  );
}
