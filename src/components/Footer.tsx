import { Instagram, Facebook } from "lucide-react";

const YEAR = new Date().getFullYear();

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container">
      <div className="text-center mb-8">
        <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-1">12AM Stories</h3>
        <p className="text-primary-foreground/50 text-sm italic">Fresh Bakes &amp; Sweet Tales</p>
      </div>

      <div className="flex justify-center gap-5 mb-8">
        <a
          href="#"
          aria-label="Instagram"
          className="w-10 h-10 rounded-full border border-accent/40 flex items-center justify-center text-accent hover:bg-accent/10 transition-colors"
        >
          <Instagram size={18} aria-hidden="true" />
        </a>
        <a
          href="#"
          aria-label="Facebook"
          className="w-10 h-10 rounded-full border border-accent/40 flex items-center justify-center text-accent hover:bg-accent/10 transition-colors"
        >
          <Facebook size={18} aria-hidden="true" />
        </a>
      </div>

      <p className="text-center text-primary-foreground/40 text-xs">
        &copy; {YEAR} 12AM Stories. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
