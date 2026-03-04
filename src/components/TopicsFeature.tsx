import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const topicPills = [
  { emoji: '🏙️', name: 'Brokerage Tech' },
  { emoji: '🤖', name: 'AI & Automation' },
  { emoji: '💰', name: 'PropTech VC' },
  { emoji: '📊', name: 'Market Data' },
  { emoji: '🏗️', name: 'CRE & Development' },
  { emoji: '🏡', name: 'Residential Tech' },
];

const previewCards = [
  { title: 'AI-Native CRMs Are Replacing Traditional Platforms', category: 'Brokerage Tech', readTime: '4 min read' },
  { title: 'iBuyer Market Share Hits 3-Year High', category: 'Market Data', readTime: '6 min read' },
  { title: 'Series B Boom: $280M in PropTech Funding This Quarter', category: 'PropTech VC', readTime: '5 min read' },
  { title: 'Automating Transaction Coordination with Claude', category: 'AI & Automation', readTime: '7 min read' },
  { title: 'Multifamily Data Platforms Consolidate', category: 'CRE & Development', readTime: '3 min read' },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

const TopicsFeature = () => (
  <section className="container mx-auto px-4 py-16 md:py-20 max-w-6xl">
    {/* Two-column grid - REVERSED */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center md:flex-row-reverse">

      {/* LEFT: Topics Preview (appears on left on desktop, but second in DOM for mobile) */}
      <motion.div
        className="glass-card p-6 space-y-2.5 order-2 md:order-1"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {previewCards.map((card, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
          >
            <h4 className="font-body font-medium text-[12px] text-ink leading-snug mb-1">
              {card.title}
            </h4>
            <p className="font-body text-[10px] text-text-light">
              {card.category} · {card.readTime}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* RIGHT: Feature Text (appears on right on desktop, but first in DOM for mobile) */}
      <motion.div
        className="space-y-6 order-1 md:order-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-[38px] md:text-[44px] text-ink leading-tight"
        >
          Explore Intelligence by Topic
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-body text-[15px] md:text-[16px] text-text leading-relaxed"
          >
          Dive deep into AI strategies, market analysis, and brokerage intelligence. Thousands of articles curated across the verticals that give you an edge—searchable, organized, and ready when you need them.
        </motion.p>

        {/* Topics Grid */}
        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-x-6 gap-y-2 pt-2">
          {topicPills.map((topic) => (
            <div key={topic.name} className="flex items-center justify-between font-body text-[13px] text-ink">
              <span>{topic.emoji} {topic.name}</span>
              <span className="text-text-light">→</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="pt-2">
          <Link
            to="logs"
            smooth
            duration={600}
            offset={-70}
            className="inline-block bg-orange text-white font-display font-bold text-[13px] px-6 py-3 rounded-xl hover:translate-y-[-1px] hover:shadow-glow-sm transition-all duration-200 cursor-pointer"
          >
            Explore all topics ↗
          </Link>
        </motion.div>
      </motion.div>

    </div>
  </section>
);

export default TopicsFeature;
