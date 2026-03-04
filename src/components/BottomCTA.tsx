import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SubscribeModal from './SubscribeModal';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

const benefits = [
  "Weekly market intelligence, decoded",
  "No noise. No filler. 100% signal.",
  "Unsubscribe in one click, anytime",
];

const BottomCTA = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-card/30">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        className="relative container mx-auto px-4 text-center max-w-2xl space-y-7"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
          <span className="font-mono text-[10px] text-orange uppercase tracking-wider font-semibold">
            Transmission Active
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          className="font-display font-extrabold text-[38px] md:text-[44px] text-ink leading-tight"
        >
          Receive Field Logs
          <br />
          Directly
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="font-body text-[16px] md:text-[17px] text-text max-w-xl mx-auto leading-relaxed"
        >
          Structured intelligence. No noise. No hype.
          <br />Join {" "}
          <span className="text-orange font-semibold">1,200+ agents</span> receiving weekly logs.
        </motion.p>

        {/* Benefit bullets */}
        <motion.ul
          variants={fadeUp}
          className="space-y-3 text-left max-w-md mx-auto glass-card p-6 md:p-7"
        >
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 font-body text-[13px] md:text-[14px] text-text">
              <div className="mt-0.5 w-5 h-5 rounded-lg bg-orange/15 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-orange" strokeWidth={2.5} />
              </div>
              <span>{b}</span>
            </li>
          ))}
        </motion.ul>

        {/* Subscribe button */}
        <motion.div variants={fadeUp} className="pt-1">
          <button
            onClick={() => setModalOpen(true)}
            className="cta-button-primary text-base px-10 py-4"
          >
            Join the Transmission
          </button>
        </motion.div>

        {/* Trust signal */}
        <motion.p
          variants={fadeUp}
          className="font-mono text-[10px] text-text-muted uppercase tracking-wide"
        >
          No spam. No selling your data. Unsubscribe anytime.
        </motion.p>
      </motion.div>

      {/* Subscribe Modal */}
      <SubscribeModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default BottomCTA;
