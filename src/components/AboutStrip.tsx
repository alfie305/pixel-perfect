import { motion } from 'framer-motion';

const AboutStrip = () => (
  <section className="container mx-auto px-4 py-16">
    <div className="ink-divider mb-10" />
    <div className="flex flex-col md:flex-row items-center gap-10">
      <motion.div
        className="w-full md:w-[35%] flex justify-center"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="dashed-placeholder w-[250px] h-[300px] rounded-lg">
          Character Illustration<br />About, Side View<br />~250 × 300px
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-[65%] space-y-5"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <div className="font-mono text-xs text-gray-2 space-y-1 border border-gray-1 p-3 rounded-sm inline-block">
          <div>Origin: The Continuum</div>
          <div>Assignment: Earth</div>
          <div>Objective: Reduce noise. Increase signal.</div>
        </div>
        <h2 className="font-display font-bold text-2xl text-ink">About the Analyst</h2>
        <p className="font-body text-text-body leading-relaxed">
          An intelligence operative from a post-scarcity civilization, assigned to study one of Earth's most chaotic systems:
          residential real estate. The logs you read here are structured field observations — part research, part reluctant fascination.
        </p>
        <p className="font-body text-text-body leading-relaxed">
          Each issue follows a strict protocol: Observation, Pattern, Implication, Optimization.
          No opinions. No hype. Just signal.
        </p>
        <a href="#" className="inline-block font-body text-sm text-orange hover:text-orange-dark transition-colors underline underline-offset-4">
          Read the full assignment brief →
        </a>
      </motion.div>
    </div>
  </section>
);

export default AboutStrip;
