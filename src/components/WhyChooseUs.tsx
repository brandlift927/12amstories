import { Leaf, Palette, Clock, ShieldCheck, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const features: Feature[] = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Only the finest, freshest ingredients in every bake" },
  { icon: Palette, title: "Custom Designs", desc: "Bespoke cakes tailored to your dream vision" },
  { icon: Clock, title: "On-Time Delivery", desc: "Reliable delivery, right when you need it" },
  { icon: ShieldCheck, title: "Quality Assured", desc: "Hygienic kitchen with strict quality standards" },
];

const WhyChooseUs = () => (
  <section className="py-20 md:py-28 bg-primary">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-accent font-body text-xs tracking-[0.25em] uppercase mb-3">Why Us</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
          Why Choose 12AM Stories
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="text-center group">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
              <Icon className="text-accent" size={28} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-2">{title}</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
