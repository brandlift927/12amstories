import { useEffect, useRef } from "react";
import interiorImg from "@/assets/12am-story.jpg";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-up");
          // Unobserve once triggered – animation only plays once
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div ref={ref} className="container opacity-0 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img
            src={interiorImg}
            alt="12AM Stories bakery interior"
            className="w-full h-[400px] object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Text */}
        <div>
          <p className="text-accent font-body text-xs tracking-[0.25em] uppercase mb-3">Our Story</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Where Every Slice Tells a Story
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            At 12AM Stories, we don&apos;t just bake cakes — we craft memories. From birthdays to
            special surprises, every dessert is made with love and premium ingredients. Our passion
            for perfection is evident in every layer, every swirl, and every bite. We believe that
            the finest ingredients combined with artisan skill create something truly unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
