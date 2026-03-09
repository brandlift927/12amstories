import { useState, useCallback } from "react";
import { X } from "lucide-react";

import img1 from "@/assets/products/IMG_1396.JPG";
import img2 from "@/assets/products/IMG_1397.JPG";
import img3 from "@/assets/products/IMG_1398.JPG";
import img4 from "@/assets/products/IMG_1399.JPG";
import img5 from "@/assets/products/IMG_1400.JPG";
import img6 from "@/assets/products/IMG_1401.JPG";
import img7 from "@/assets/products/IMG_1402.JPG";
import img8 from "@/assets/products/IMG_1403.JPG";
import img9 from "@/assets/products/IMG_1404.JPG";
import img10 from "@/assets/products/IMG_1406.JPG";
import img11 from "@/assets/products/IMG_1407.JPG";
import img12 from "@/assets/products/IMG_1408.JPG";
import img13 from "@/assets/products/IMG_1409.JPG";
import img14 from "@/assets/products/IMG_1411.JPG";

const images = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13, img14,
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  const open = useCallback((src: string) => setLightbox(src), []);
  const close = useCallback(() => setLightbox(null), []);

  // Close lightbox on Escape key
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => { if (e.key === "Escape") close(); },
    [close]
  );

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
              key={src}
              onClick={() => open(src)}
              className="block w-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 break-inside-avoid"
              aria-label={`View gallery image ${i + 1}`}
            >
              <img
                src={src}
                alt={`Gallery item ${i + 1}`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
          onKeyDown={handleKeyDown}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground"
            onClick={close}
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
