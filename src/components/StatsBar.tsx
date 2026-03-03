import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Users, FileText, Grid3x3, Calendar } from 'lucide-react';

const stats = [
  {
    value: 1200,
    suffix: '+',
    label: 'Agents Receiving Logs',
    icon: Users,
    gradient: 'from-orange/20 to-orange/5'
  },
  {
    value: 47,
    suffix: '+',
    label: 'Field Logs Published',
    icon: FileText,
    gradient: 'from-purple-500/20 to-purple-500/5'
  },
  {
    value: 5,
    suffix: '',
    label: 'Signal Categories',
    icon: Grid3x3,
    gradient: 'from-blue-500/20 to-blue-500/5'
  },
  {
    value: 52,
    suffix: '+',
    label: 'Weeks of Intelligence',
    icon: Calendar,
    gradient: 'from-green-500/20 to-green-500/5'
  },
];

const StatsBar = () => (
  <motion.section
    className="py-12 md:py-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6 }}
  >
    <div className="container mx-auto px-4">
      <div className="glass-card p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, suffix, label, icon: Icon, gradient }, i) => (
            <motion.div
              key={label}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8 text-orange" strokeWidth={2} />
              </div>

              {/* Number with pulse animation */}
              <span className="font-display font-extrabold text-4xl md:text-5xl text-ink leading-none mb-2">
                <CountUp
                  end={value}
                  suffix={suffix}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                  className="animate-glow-pulse"
                />
              </span>

              {/* Label */}
              <span className="font-body text-sm text-text-muted max-w-[150px]">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

export default StatsBar;
