import { useState, useCallback } from "react";
import { X } from "lucide-react";

import img9 from "@/assets/products/9.png";
import img10 from "@/assets/products/10.png";
import img12 from "@/assets/products/12.png";
import blackForestImg from "@/assets/products/Black Forest.png";
import blueberryMouseImg from "@/assets/products/Blueberry cheese mouse cup.png";
import butterscotchImg from "@/assets/products/Butterscotch chocolate cake.png";
import cheeseBiscuitImg from "@/assets/products/Cheese biscuit 12AM SPECIAL.png";
import creamyChocolateImg from "@/assets/products/Creamy chocolate cake.png";
import lotusBiscoffImg from "@/assets/products/Lotus biscoff cheese cup.png";
import mixFruitJellyImg from "@/assets/products/Mix fruit jelly cake.png";
import nanKataiImg from "@/assets/products/Nan katai.png";
import pineappleCakeImg from "@/assets/products/Pineapple cake.png";
import royalChocolateImg from "@/assets/products/Royal chocolate cake.png";
import shrewsburyImg from "@/assets/products/Shrewsbury.png";
import vanillaChocolateImg from "@/assets/products/Vannila chocolate cake.png";

const images = [
  blackForestImg, blueberryMouseImg, butterscotchImg, cheeseBiscuitImg, creamyChocolateImg,
  lotusBiscoffImg, mixFruitJellyImg, nanKataiImg, pineappleCakeImg, royalChocolateImg,
  shrewsburyImg, vanillaChocolateImg, img9, img10, img12
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
