import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { value: 1200, suffix: '+', label: 'Agents Receiving Logs' },
  { value: 47,   suffix: '+', label: 'Field Logs Published' },
  { value: 5,    suffix: '',  label: 'Signal Categories' },
  { value: 52,   suffix: '+', label: 'Weeks of Intelligence' },
];

const StatsBar = () => (
  <motion.section
    className="border-y border-ink/10 bg-ink/[0.02] py-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-ink/10">
        {stats.map(({ value, suffix, label }, i) => (
          <motion.div
            key={label}
            className="flex flex-col items-center text-center px-4 py-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
          >
            <span className="font-display font-extrabold text-3xl md:text-4xl text-ink leading-none">
              <CountUp
                end={value}
                suffix={suffix}
                duration={2}
                enableScrollSpy
                scrollSpyOnce
              />
            </span>
            <span className="font-mono text-[10px] text-gray-2 uppercase tracking-widest mt-1.5">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default StatsBar;
