import heroImg from "@/assets/hero-cake.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image – eager + fetchpriority for LCP */}
      <img
        src={heroImg}
        alt="Premium cake from 12AM Stories bakery"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl fade-up">
        <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
          Cake • Pastry • Bakery
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground mb-3 leading-tight">
          12AM Stories
        </h1>
        <p className="text-gold-light font-heading text-lg md:text-xl italic mb-2">
          Fresh Bakes &amp; Sweet Tales
        </p>
        <p className="text-primary-foreground/70 text-sm md:text-base mb-8 max-w-md mx-auto">
          Midnight cravings? We bake happiness daily.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("#menu")}
            className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-medium text-sm tracking-wide hover:brightness-110 transition-all shadow-lg"
          >
            🍰 View Menu
          </button>
          <a
            href="https://wa.me/919082672306?text=Hi%2012AM%20Stories,%20I%20want%20to%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-primary-foreground/30 text-primary-foreground font-medium text-sm tracking-wide hover:bg-primary-foreground/10 transition-all"
          >
            📲 Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
