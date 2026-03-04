import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Users, FileText, Grid3x3, Calendar } from 'lucide-react';

const stats = [
  {
    value: 1200,
    suffix: '+',
    label: 'Agents Receiving Logs',
    icon: Users,
    iconBg: 'bg-orange/10'
  },
  {
    value: 47,
    suffix: '+',
    label: 'Field Logs Published',
    icon: FileText,
    iconBg: 'bg-purple-500/10'
  },
  {
    value: 5,
    suffix: '',
    label: 'Signal Categories',
    icon: Grid3x3,
    iconBg: 'bg-blue-500/10'
  },
  {
    value: 52,
    suffix: '+',
    label: 'Weeks of Intelligence',
    icon: Calendar,
    iconBg: 'bg-green-500/10'
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
    <div className="container mx-auto px-4 max-w-6xl">
      {/* Single elegant card with dividers */}
      <div className="glass-card px-8 md:px-16 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0">
          {stats.map(({ value, suffix, label, icon: Icon, iconBg }, i) => (
            <motion.div
              key={label}
              className="flex flex-col items-center text-center relative lg:px-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Vertical divider - hide on mobile, show on lg */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border" />
              )}

              {/* Icon - smaller and more refined */}
              <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center mb-3.5 transition-transform duration-200 hover:scale-105`}>
                <Icon className="w-5 h-5 text-ink" strokeWidth={1.5} />
              </div>

              {/* Number - elegant serif */}
              <span className="font-display font-extrabold text-4xl md:text-[2.75rem] text-ink leading-none mb-2">
                <CountUp
                  end={value}
                  suffix={suffix}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </span>

              {/* Label - uppercase, smaller */}
              <span className="font-body text-[11px] uppercase tracking-wider text-text-muted max-w-[140px] leading-snug">
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
