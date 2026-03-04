import { useState } from 'react';
import { motion } from 'framer-motion';
import SubscribeModal from './SubscribeModal';

const avatars = [
  { initials: 'JR', bg: '#6B8CAE' },
  { initials: 'SM', bg: '#8B7355' },
  { initials: 'AL', bg: '#5A8A6A' },
  { initials: 'KT', bg: '#9A6B7A' },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

const NewsletterFeature = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="container mx-auto px-4 py-16 md:py-20 max-w-6xl">
      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT: Feature Text */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-[38px] md:text-[44px] text-ink leading-tight"
          >
            The 5-Minute Read That Wins You More Clients, Deals & Authority
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body text-[15px] md:text-[16px] text-text leading-relaxed"
          >
            Every week, get AI strategies, market intelligence, and proven tactics that turn knowledge into action. While other agents just read the news, you'll have the tools to dominate your market.
          </motion.p>

          {/* Avatars + Reader count */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <div className="flex">
              {avatars.map((avatar, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-paper flex items-center justify-center text-[10px] text-white font-semibold"
                  style={{
                    background: avatar.bg,
                    marginLeft: i === 0 ? 0 : '-6px',
                    zIndex: 4 - i
                  }}
                >
                  {avatar.initials}
                </div>
              ))}
            </div>
            <span className="font-body text-[14px] text-text-mid">
              <strong>750,000+</strong> readers this week
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-orange text-white font-display font-bold text-[13px] px-6 py-3 rounded-xl hover:translate-y-[-1px] hover:shadow-glow-sm transition-all duration-200"
            >
              Subscribe now ↗
            </button>
            <button className="border-2 border-border text-ink font-display font-semibold text-[13px] px-6 py-3 rounded-xl hover:border-ink transition-colors duration-200">
              Read today's issue
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT: Newsletter Preview */}
        <motion.div
          className="glass-card p-6 md:p-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src="/assets/newsletter-preview.png"
            alt="Newsletter preview example"
            className="w-full rounded-xl"
          />
        </motion.div>

      </div>

      {/* Subscribe Modal */}
      <SubscribeModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default NewsletterFeature;
