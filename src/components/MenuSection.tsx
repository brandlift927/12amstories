

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

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

const categories: { label: string; emoji: string; items: MenuItem[] }[] = [
  {
    label: "Delicious Cakes",
    emoji: "🎂",
    items: [
      { name: "Black Forest", description: "Classic chocolate cake with cherries and cream", price: "₹549", image: blackForestImg },
      { name: "Butterscotch Chocolate Cake", description: "Dual delight of butterscotch and rich chocolate", price: "₹599", image: butterscotchImg },
      { name: "Creamy Chocolate Cake", description: "Indulgent layer cake with smooth chocolate ganache", price: "₹549", image: creamyChocolateImg },
      { name: "Mix Fruit Jelly Cake", description: "Refreshing cake topped with fresh fruits and jelly", price: "₹599", image: mixFruitJellyImg },
      { name: "Pineapple Cake", description: "Classic tropical pineapple sponge cake", price: "₹499", image: pineappleCakeImg },
      { name: "Royal Chocolate Cake", description: "Premium dark chocolate cake for true connoisseurs", price: "₹649", image: royalChocolateImg },
      { name: "Vanilla Chocolate Cake", description: "The perfect balance of vanilla and chocolate sponge", price: "₹549", image: vanillaChocolateImg },
      { name: "Chocolate Cake", description: "Specially crafted celebration cake", price: "₹599", image: img9 },
    ],
  },
  {
    label: "Mousse, Cheese Cups & Pastries",
    emoji: "🍮",
    items: [
      { name: "Blueberry Cheese Mousse Cup", description: "Light and airy blueberry cheesecake mousse", price: "₹180", image: blueberryMouseImg },
      { name: "Lotus Biscoff Cheese Cup", description: "Trendy biscoff flavored cheesecake in a cup", price: "₹220", image: lotusBiscoffImg },
      { name: "2 Blueberry Cheese Mousse Cup", description: "Signature birthday design cake", price: "₹599", image: img10 },
      { name: "Blueberry Cheese pastry", description: "Elegant anniversary special cake", price: "₹599", image: img12 },
    ],
  },
  {
    label: "Biscuits & Cookies",
    emoji: "🍪",
    items: [
      { name: "Cheese Biscuit 12AM Special", description: "Our signature savory and sweet cheese biscuits", price: "₹250", image: cheeseBiscuitImg },
      { name: "Nan Katai", description: "Traditional Indian shortbread cookies", price: "₹150", image: nanKataiImg },
      { name: "Shrewsbury Biscuit", description: "Famous buttery biscuits with a hint of lemon", price: "₹200", image: shrewsburyImg },
    ],
  },
];



// Pre-build WhatsApp URLs once – avoids re-encoding on every render
const WA_BASE = "https://wa.me/919082672306?text=";
const getOrderUrl = (name: string) =>
  `${WA_BASE}${encodeURIComponent(`Hi 12AM Stories, I want to order ${name}`)}`;

const MenuSection = () => {

  return (
    <section id="menu" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-accent font-body text-xs tracking-[0.25em] uppercase mb-3">Our Creations</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Menu</h2>
        </div>


        {categories.map((cat) => (
          <div key={cat.label} className="mb-16 last:mb-0">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">{cat.emoji}</span>
              <h3 className="font-heading text-2xl font-bold text-foreground">{cat.label}</h3>
              <div className="h-px bg-border flex-grow ml-4"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cat.items.map((item) => (
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
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
