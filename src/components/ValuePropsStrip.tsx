import { motion } from 'framer-motion';
import { Eye, BarChart3, Radio } from 'lucide-react';

const props = [
  {
    Icon: Eye,
    title: "Observe",
    desc: "We track what's moving in the market",
    gradient: "from-orange/30 via-orange/15 to-transparent"
  },
  {
    Icon: BarChart3,
    title: "Analyze",
    desc: "We decode the system beneath the surface",
    gradient: "from-purple-500/30 via-purple-500/15 to-transparent"
  },
  {
    Icon: Radio,
    title: "Transmit",
    desc: "We deliver signal, not noise",
    gradient: "from-blue-500/30 via-blue-500/15 to-transparent"
  },
];

const ValuePropsStrip = () => (
  <section className="container mx-auto px-4 py-16 md:py-20">
    <motion.div
      className="ink-divider mb-16"
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {props.map(({ Icon, title, desc, gradient }, i) => (
        <motion.div
          key={title}
          className="glass-card-hover text-center space-y-5 p-10 group cursor-pointer relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: i * 0.15 }}
        >
          {/* Gradient background overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

          {/* Content */}
          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange/20 to-orange/5 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:shadow-glow-sm transition-all duration-300"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
            >
              <Icon className="w-7 h-7 text-orange" strokeWidth={2} />
            </motion.div>

            {/* Title */}
            <h3 className="font-display font-bold text-xl md:text-2xl text-ink group-hover:text-orange transition-colors duration-300">
              {title}
            </h3>

            {/* Description */}
            <p className="font-body text-base text-text max-w-xs mx-auto">
              {desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      className="ink-divider mt-16"
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
    />
  </section>
);

export default ValuePropsStrip;
