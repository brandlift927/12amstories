import { MessageCircle } from "lucide-react";

const WA_HREF =
  "https://wa.me/919082672306?text=Hi%2012AM%20Stories%2C%20I%20want%20to%20order.";

const WhatsAppButton = () => (
  <div className="fixed bottom-6 right-6 z-40 group">
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-pulse w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center shadow-lg hover:brightness-110 transition-all"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="text-whatsapp-foreground" size={26} fill="currentColor" aria-hidden="true" />
    </a>
    <span className="absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-md bg-foreground text-background text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      Order Now
    </span>
  </div>
);

export default WhatsAppButton;
