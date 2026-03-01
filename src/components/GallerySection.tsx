import { useState } from "react";
import { X } from "lucide-react";

import img1 from "@/assets/red-velvet-cake.jpg";
import img2 from "@/assets/chocolate-cake.jpg";
import img3 from "@/assets/designer-cake.jpg";
import img4 from "@/assets/cheesecake.jpg";
import img5 from "@/assets/butterscotch-cake.jpg";
import img6 from "@/assets/croissants.jpg";
import img7 from "@/assets/pastries.jpg";
import img8 from "@/assets/mousse.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-accent font-body text-xs tracking-[0.25em] uppercase mb-3">Our Gallery</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Sweet Moments</h2>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(src)}
              className="block w-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 break-inside-avoid"
            >
              <img
                src={src}
                alt={`Gallery item ${i + 1}`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
