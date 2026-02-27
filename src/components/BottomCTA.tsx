import { useState } from 'react';
import { motion } from 'framer-motion';
import SubscribeModal from './SubscribeModal';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const benefits = [
  "Weekly market intelligence, decoded",
  "No noise. No filler. 100% signal.",
  "Unsubscribe in one click, anytime",
];

const BottomCTA = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
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

        {/* Benefit bullets */}
        <motion.ul variants={fadeUp} className="space-y-1.5 text-left max-w-xs mx-auto">
          {benefits.map((b) => (
            <li key={b} className="flex items-center gap-2 font-body text-sm text-text-body">
              <span className="text-orange font-bold">✓</span>
              {b}
            </li>
          ))}
        </motion.ul>

        {/* Subscribe button */}
        <motion.div
          variants={fadeUp}
          className="max-w-md mx-auto"
        >
          <button
            onClick={() => setModalOpen(true)}
            className="bg-orange hover:bg-orange-dark text-primary-foreground font-display font-bold text-sm px-6 py-3 rounded-md border border-ink transition-colors whitespace-nowrap"
          >
            Join Transmission
          </button>
        </motion.div>

        {/* Subscribe Modal */}
        <SubscribeModal open={modalOpen} onOpenChange={setModalOpen} />

        <motion.p variants={fadeUp} className="font-mono text-[11px] text-gray-2">
          Free · No clickbait · Unsubscribe anytime
        </motion.p>
      </motion.div>
    </section>
  );
};

export default BottomCTA;
