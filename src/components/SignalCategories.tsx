import { motion } from 'framer-motion';
import signal1 from "@/assets/signal-1.png";
import signal2 from "@/assets/signal-2.png";
import signal3 from "@/assets/signal-3.png";
import signal4 from "@/assets/signal-4.png";
import signal5 from "@/assets/signal-5.png";

const cards = [signal1, signal2, signal3, signal4, signal5];

const categories = [
  { name: "Market Systems",  desc: "Residential shifts & trends" },
  { name: "AI & Tech",       desc: "Infrastructure & automation" },
  { name: "Brokerage Intel", desc: "Industry moves & patterns" },
  { name: "Capital Flows",   desc: "Investment & financing data" },
  { name: "Field Protocol",  desc: "Agent tools & strategy" },
];

const SignalCategories = () => (
  <section className="w-full py-1">
    <motion.div
      className="px-4 mb-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display font-bold text-2xl text-ink relative inline-block">
        Signal Categories
        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-ink/30" />
      </h2>
    </motion.div>

    <div className="flex gap-0">
      {cards.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
          className="relative flex-1 h-[500px] overflow-hidden group cursor-pointer first:rounded-l-xl last:rounded-r-xl"
        >
          {/* Image */}
          <img
            src={src}
            alt={categories[i].name}
            className="w-full h-full object-cover scale-[1.18] transition-transform duration-500 ease-out group-hover:scale-[1.28]"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent pointer-events-none" />

          {/* Category label */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:-translate-y-0.5 transition-transform duration-300">
            <p className="font-display font-bold text-white text-sm leading-tight drop-shadow-sm">
              {categories[i].name}
            </p>
            <p className="font-mono text-white/60 text-[10px] mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {categories[i].desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SignalCategories;
