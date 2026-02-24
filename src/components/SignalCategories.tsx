import signal1 from "@/assets/signal-1.png";
import signal2 from "@/assets/signal-2.png";
import signal3 from "@/assets/signal-3.png";
import signal4 from "@/assets/signal-4.png";
import signal5 from "@/assets/signal-5.png";

const cards = [signal1, signal2, signal3, signal4, signal5];

const SignalCategories = () => (
  <section className="container mx-auto px-4 py-1">
    <h2 className="font-display font-bold text-2xl text-ink mb-3 relative inline-block">
      Signal Categories
      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-ink/30" />
    </h2>
    <div className="flex gap-0.5">
      {cards.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Signal category ${i + 1}`}
          className="flex-1 min-w-0 w-0 rounded-lg"
        />
      ))}
    </div>
  </section>
);

export default SignalCategories;
