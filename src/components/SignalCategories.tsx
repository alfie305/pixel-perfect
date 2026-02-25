import { motion } from 'framer-motion';
import signal1 from "@/assets/signal-1.png";
import signal2 from "@/assets/signal-2.png";
import signal3 from "@/assets/signal-3.png";
import signal4 from "@/assets/signal-4.png";
import signal5 from "@/assets/signal-5.png";

const cards = [signal1, signal2, signal3, signal4, signal5];

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
          className="flex-1 h-[500px] overflow-hidden group cursor-pointer first:rounded-l-xl last:rounded-r-xl"
        >
          <img
            src={src}
            alt={`Signal category ${i + 1}`}
            className="w-full h-full object-cover scale-[1.18] transition-transform duration-500 ease-out group-hover:scale-[1.28]"
          />
        </motion.div>
      ))}
    </div>
  </section>
);

export default SignalCategories;
