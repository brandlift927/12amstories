import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
      <WhatsAppButton />

      {/* Mobile sticky order bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-primary/95 backdrop-blur-md px-4 py-3 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <span className="font-heading text-sm font-semibold text-primary-foreground">12AM Stories</span>
        <a
          href="https://wa.me/919082672306?text=Hi%2012AM%20Stories,%20I%20want%20to%20order."
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full bg-accent text-accent-foreground text-xs font-semibold hover:brightness-110 transition-all"
        >
          Order Now
        </a>
      </div>
    </main>
  );
};

export default Index;
