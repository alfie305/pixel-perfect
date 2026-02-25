import { motion } from 'framer-motion';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const BottomCTA = () => (
  <section className="bg-ink/5 py-16">
    <motion.div
      className="container mx-auto px-4 text-center max-w-lg space-y-5"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
    >
      <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl text-ink">
        Receive Field Logs Directly
      </motion.h2>

      <motion.p variants={fadeUp} className="font-body text-text-body">
        Structured intelligence. No noise. No hype.
      </motion.p>

      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-md border border-ink bg-paper font-body text-sm text-ink placeholder:text-gray-2 focus:outline-none focus:ring-2 focus:ring-orange"
        />
        <button className="bg-orange hover:bg-orange-dark text-primary-foreground font-display font-bold text-sm px-6 py-3 rounded-md border border-ink transition-colors whitespace-nowrap">
          Join Transmission
        </button>
      </motion.div>

      <motion.p variants={fadeUp} className="font-mono text-[11px] text-gray-2">
        Free · No clickbait · Unsubscribe anytime
      </motion.p>
    </motion.div>
  </section>
);

export default BottomCTA;
