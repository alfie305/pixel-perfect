import { motion } from 'framer-motion';
import { Eye, BarChart3, Radio } from 'lucide-react';

const props = [
  {
    Icon: Eye,
    title: "Observe",
    desc: "We track what's moving in the market",
    iconBg: "bg-orange/10"
  },
  {
    Icon: BarChart3,
    title: "Analyze",
    desc: "We decode the system beneath the surface",
    iconBg: "bg-orange/10"
  },
  {
    Icon: Radio,
    title: "Transmit",
    desc: "We deliver signal, not noise",
    iconBg: "bg-orange/10"
  },
];

const ValuePropsStrip = () => (
  <section className="container mx-auto px-4 py-16 md:py-20 max-w-6xl">
    {/* Subtle divider */}
    <motion.div
      className="h-px bg-border mb-16"
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    />

    {/* Clean 3-column grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {props.map(({ Icon, title, desc, iconBg }, i) => (
        <motion.div
          key={title}
          className="glass-card text-center p-12 md:p-10 lg:p-12 group hover:shadow-clay-hover transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: i * 0.12 }}
        >
          {/* Icon - smaller, more refined */}
          <motion.div
            className={`w-13 h-13 rounded-xl ${iconBg} flex items-center justify-center mx-auto mb-6 transition-transform duration-200 group-hover:scale-105`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 + 0.2 }}
          >
            <Icon className="w-[22px] h-[22px] text-orange" strokeWidth={1.5} />
          </motion.div>

          {/* Title - serif, elegant */}
          <h3 className="font-display font-bold text-[22px] text-ink mb-2.5 leading-tight">
            {title}
          </h3>

          {/* Description - smaller, refined */}
          <p className="font-body text-[13.5px] text-text leading-relaxed max-w-[220px] mx-auto">
            {desc}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Subtle divider */}
    <motion.div
      className="h-px bg-border mt-16"
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
    />
  </section>
);

export default ValuePropsStrip;
