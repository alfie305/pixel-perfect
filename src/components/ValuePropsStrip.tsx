import { motion } from 'framer-motion';
import { Eye, BarChart3, Radio } from 'lucide-react';

const props = [
  { Icon: Eye,       title: "Observe",  desc: "We track what's moving in the market" },
  { Icon: BarChart3, title: "Analyze",  desc: "We decode the system beneath the surface" },
  { Icon: Radio,     title: "Transmit", desc: "We deliver signal, not noise" },
];

const ValuePropsStrip = () => (
  <section className="container mx-auto px-4 py-12">
    <motion.div
      className="ink-divider mb-10"
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {props.map(({ Icon, title, desc }, i) => (
        <motion.div
          key={title}
          className="text-center space-y-4 bg-ink/[0.04] rounded-xl p-8 border border-ink/10 hover:border-ink/25 transition-colors duration-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
        >
          <motion.div
            className="w-12 h-12 rounded-full bg-orange/15 flex items-center justify-center mx-auto"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: i * 0.12 + 0.2 }}
          >
            <Icon className="w-5 h-5 text-orange" />
          </motion.div>
          <h3 className="font-display font-bold text-lg text-ink">{title}</h3>
          <p className="font-body text-sm text-text-body">{desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      className="ink-divider mt-10"
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    />
  </section>
);

export default ValuePropsStrip;
