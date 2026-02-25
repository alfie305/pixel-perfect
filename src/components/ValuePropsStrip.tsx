import { motion } from 'framer-motion';

const props = [
  { icon: "●", title: "Observe", desc: "We track what's moving in the market" },
  { icon: "◈", title: "Analyze", desc: "We decode the system beneath the surface" },
  { icon: "▷", title: "Transmit", desc: "We deliver signal, not noise" },
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

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {props.map((p, i) => (
        <motion.div
          key={p.title}
          className={`text-center space-y-3 ${i < 2 ? "md:border-r md:border-ink/20" : ""}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
        >
          <motion.div
            className="text-orange text-2xl"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: i * 0.12 + 0.2 }}
          >
            {p.icon}
          </motion.div>
          <h3 className="font-display font-bold text-lg text-ink">{p.title}</h3>
          <p className="font-body text-sm text-text-body">{p.desc}</p>
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
