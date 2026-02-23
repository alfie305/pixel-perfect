import card1 from "@/assets/card-1-industry-news.png";
import card2 from "@/assets/card-2-ai-tech.png";
import card3 from "@/assets/card-3-market-research.png";
import card4 from "@/assets/card-4-growing-business.png";
import card5 from "@/assets/card-5-brokerage-intel.png";

const cards = [
  { src: card1, alt: "Industry News" },
  { src: card2, alt: "AI & Tech Implementation" },
  { src: card3, alt: "Market Research (AI-Powered)" },
  { src: card4, alt: "Growing Your Business" },
  { src: card5, alt: "Brokerage Intel (PRO)" },
];

const SignalCategories = () => (
  <section className="container mx-auto px-4 py-12">
    <h2 className="font-display font-bold text-2xl text-ink mb-8 relative inline-block">
      Signal Categories
      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-ink/30" />
    </h2>
    <div className="flex gap-4 overflow-x-auto pb-4">
      {cards.map((card) => (
        <img
          key={card.alt}
          src={card.src}
          alt={card.alt}
          className="w-[200px] md:w-[220px] lg:w-[240px] rounded-lg shadow-md flex-shrink-0 hover:shadow-lg transition-shadow cursor-pointer"
        />
      ))}
    </div>
  </section>
);

export default SignalCategories;
