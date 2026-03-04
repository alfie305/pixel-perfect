import { motion } from 'framer-motion';
import { TrendingUp, Cpu, Building2, DollarSign, FileText } from 'lucide-react';

const categories = [
  {
    name: "Market Systems",
    desc: "Residential shifts, pricing trends, and inventory dynamics across markets",
    icon: TrendingUp,
    gradient: "from-orange/20 via-orange/10 to-transparent",
    count: "12 logs"
  },
  {
    name: "AI & Tech",
    desc: "Infrastructure automation, PropTech tools, and emerging technologies",
    icon: Cpu,
    gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
    count: "8 logs"
  },
  {
    name: "Brokerage Intel",
    desc: "Industry moves, commission patterns, and competitive positioning",
    icon: Building2,
    gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
    count: "15 logs"
  },
  {
    name: "Capital Flows",
    desc: "Investment patterns, financing data, and institutional movement",
    icon: DollarSign,
    gradient: "from-green-500/20 via-green-500/10 to-transparent",
    count: "7 logs"
  },
  {
    name: "Field Protocol",
    desc: "Agent tools, strategy frameworks, and operational best practices",
    icon: FileText,
    gradient: "from-pink-500/20 via-pink-500/10 to-transparent",
    count: "9 logs"
  },
];

const SignalCategories = () => (
  <section className="container mx-auto px-4 py-20 md:py-24">
    {/* Header */}
    <motion.div
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-3">
        Signal Categories
      </h2>
      <p className="font-body text-text text-lg max-w-2xl mx-auto">
        Five intelligence verticals. Each one decoded, structured, and transmitted weekly.
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange to-transparent mx-auto mt-6" />
    </motion.div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {categories.map((category, i) => {
        const Icon = category.icon;
        return (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-card-hover p-8 group cursor-pointer relative overflow-hidden min-h-[280px] flex flex-col"
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Icon + Count */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange/20 to-orange/5 flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow-sm transition-all duration-300">
                  <Icon className="w-7 h-7 text-orange" strokeWidth={2} />
                </div>
                <span className="font-mono text-xs text-text-muted px-3 py-1 rounded-full glass-card">
                  {category.count}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl md:text-2xl text-ink mb-3 group-hover:text-orange transition-colors duration-300">
                {category.name}
              </h3>

              {/* Description */}
              <p className="font-body text-sm md:text-base text-text leading-relaxed flex-grow">
                {category.desc}
              </p>

              {/* Arrow indicator */}
              <div className="mt-6 flex items-center gap-2 text-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-body text-sm font-semibold">Explore signals</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default SignalCategories;
