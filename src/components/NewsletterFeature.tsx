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
          <motion.div variants={fadeUp} className="text-[12px] text-text-light italic">
            <span className="text-[16px]">✉️</span> Weekly Digest
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-[38px] md:text-[44px] text-ink leading-tight"
          >
            Stay ahead with the PropTech Pulse
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body text-[15px] md:text-[16px] text-text leading-relaxed"
          >
            Get the most impactful stories in real estate technology delivered every week — curated, concise, and built for professionals who move fast.
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
          className="glass-card bg-paper p-6 md:p-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Preview card content */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-orange rounded-xl flex items-center justify-center shrink-0">
                <span className="font-display font-bold text-[9px] text-white text-center leading-tight">
                  PROP<br/>TECH<br/>PULSE
                </span>
              </div>
              <div>
                <div className="font-body font-semibold text-[13px] text-ink">
                  PropTech Pulse Weekly
                </div>
                <div className="font-body text-[10px] text-text-light">
                  No fluff · 100% free · Unsubscribe anytime
                </div>
              </div>
            </div>

            {/* Tag */}
            <span className="inline-block bg-yellow-200 text-yellow-900 text-[10px] font-semibold px-2.5 py-1 rounded mb-2">
              Must Know
            </span>

            {/* Headline */}
            <h3 className="font-body font-semibold text-[13px] text-ink mb-2 leading-snug">
              AI Is Reshaping How Brokerages Operate
            </h3>

            {/* Body */}
            <p className="font-body text-[11px] text-text-mid leading-relaxed">
              Major brokerages reported this week that AI-assisted transaction coordination has cut deal cycles by 30%. Early adopters are seeing measurable gains in agent productivity and client satisfaction scores, signaling a shift from experimentation to <a href="#" className="text-orange underline">full-scale deployment</a> across enterprise teams.
              <br/><br/>
              Meanwhile, several VC-backed PropTech startups announced Series B rounds totaling $280M, with a focus on <a href="#" className="text-orange underline">automated underwriting</a> and AI-native CRM platforms...
            </p>
          </div>
        </motion.div>

      </div>

      {/* Subscribe Modal */}
      <SubscribeModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default NewsletterFeature;
