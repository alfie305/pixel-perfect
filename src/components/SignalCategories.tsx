import signal1 from "@/assets/signal-1.png";
import signal2 from "@/assets/signal-2.png";
import signal3 from "@/assets/signal-3.png";
import signal4 from "@/assets/signal-4.png";
import signal5 from "@/assets/signal-5.png";

const cards = [signal1, signal2, signal3, signal4, signal5];

const SignalCategories = () => (
  <section className="w-full px-4 py-1">
    <h2 className="font-display font-bold text-2xl text-ink mb-3 relative inline-block">
      Signal Categories
      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-ink/30" />
    </h2>
    <div className="flex gap-1">
      {cards.map((src, i) => (
        <div key={i} className="flex-1 h-[420px] overflow-hidden rounded-lg group cursor-pointer">
          <img
            src={src}
            alt={`Signal category ${i + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>
      ))}
    </div>
  </section>
);

export default SignalCategories;
