import { useState, useCallback } from "react";

import redVelvetImg from "@/assets/products/IMG_1378.JPG";
import chocolateImg from "@/assets/products/IMG_1382.JPG";
import butterscotchImg from "@/assets/products/IMG_1387.JPG";
import pineappleImg from "@/assets/products/IMG_1389.JPG";
import cheesecakeImg from "@/assets/products/IMG_1390.JPG";
import mousseImg from "@/assets/products/IMG_1391.JPG";
import croissantsImg from "@/assets/products/IMG_1392.JPG";
import garlicBreadImg from "@/assets/products/IMG_1393.JPG";
import pastryImg from "@/assets/products/IMG_1394.JPG";
import designerImg from "@/assets/products/IMG_1395.JPG";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

const categories: { label: string; emoji: string; items: MenuItem[] }[] = [
  {
    label: "Cakes",
    emoji: "🎂",
    items: [
      { name: "Red Velvet Cake", description: "Classic red velvet with cream cheese frosting", price: "₹599", image: redVelvetImg },
      { name: "Chocolate Truffle", description: "Rich Belgian chocolate ganache drip cake", price: "₹549", image: chocolateImg },
      { name: "Butterscotch Crunch", description: "Silky butterscotch with caramel drizzle", price: "₹499", image: butterscotchImg },
      { name: "Pineapple Delight", description: "Fresh pineapple cake with caramelized topping", price: "₹449", image: pineappleImg },
    ],
  },
  {
    label: "Cheesecakes & Mousse",
    emoji: "🍮",
    items: [
      { name: "Blueberry Cheesecake", description: "New York style with fresh blueberries", price: "₹699", image: cheesecakeImg },
      { name: "Chocolate Mousse", description: "Velvety Belgian chocolate mousse", price: "₹349", image: mousseImg },
    ],
  },
  {
    label: "Bakery Items",
    emoji: "🥐",
    items: [
      { name: "Butter Croissants", description: "Flaky, golden, buttery French croissants", price: "₹120", image: croissantsImg },
      { name: "Garlic Bread", description: "Crispy with herbs and garlic butter", price: "₹80", image: garlicBreadImg },
      { name: "Assorted Pastries", description: "Premium mix of Danish pastries & cookies", price: "₹150", image: pastryImg },
    ],
  },
  {
    label: "Custom & Designer",
    emoji: "🎉",
    items: [
      { name: "Designer Wedding Cake", description: "Custom multi-tier with fondant & sugar flowers", price: "₹2,999", image: designerImg },
    ],
  },
];

// Pre-build WhatsApp URLs once – avoids re-encoding on every render
const WA_BASE = "https://wa.me/919082672306?text=";
const getOrderUrl = (name: string) =>
  `${WA_BASE}${encodeURIComponent(`Hi 12AM Stories, I want to order ${name}`)}`;

const MenuSection = () => {
  const [active, setActive] = useState(0);

  const handleTab = useCallback((i: number) => setActive(i), []);

  return (
    <section id="menu" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-accent font-body text-xs tracking-[0.25em] uppercase mb-3">Our Creations</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Menu</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" role="tablist">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              role="tab"
              aria-selected={active === i}
              onClick={() => handleTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${active === i
                  ? "bg-accent text-accent-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-muted"
                }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories[active].items.map((item) => (
            <div
              key={item.name}
              className="menu-card-hover bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{item.name}</h3>
                  <span className="text-accent font-semibold text-sm whitespace-nowrap ml-2">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-xs mb-4 leading-relaxed">{item.description}</p>
                <a
                  href={getOrderUrl(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center px-4 py-2 rounded-full bg-accent text-accent-foreground text-xs font-medium hover:brightness-110 transition-all"
                >
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
