import { motion } from 'framer-motion';
import { Globe, Target, Radio } from 'lucide-react';

const AboutStrip = () => (
  <section className="container mx-auto px-4 py-16 md:py-20 max-w-6xl">
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
      {/* Left: Illustration placeholder */}
      <motion.div
        className="w-full md:w-[40%] flex justify-center"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65 }}
      >
        <div className="glass-card p-10 w-full max-w-[280px] aspect-[3/4] flex flex-col items-center justify-center space-y-5">
          <div className="w-16 h-16 rounded-xl bg-orange/10 flex items-center justify-center">
            <Globe className="w-8 h-8 text-orange" strokeWidth={1.5} />
          </div>
          <p className="font-mono text-[10px] text-text-muted text-center px-4 leading-relaxed">
            Character Illustration
            <br />
            About, Side View
            <br />
            ~250 × 300px
          </p>
        </div>
      </motion.div>

      {/* Right: Content */}
      <motion.div
        className="w-full md:w-[60%] space-y-6"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, delay: 0.1 }}
      >
        {/* Meta info card */}
        <div className="glass-card p-5 inline-block">
          <div className="font-mono text-[11px] text-text space-y-2.5">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-orange" strokeWidth={2} />
              <span className="text-text-muted">Origin:</span> The Continuum
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-3.5 h-3.5 text-orange" strokeWidth={2} />
              <span className="text-text-muted">Assignment:</span> Earth
            </div>
            <div className="flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-orange" strokeWidth={2} />
              <span className="text-text-muted">Objective:</span> Reduce noise. Increase signal.
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="font-display font-bold text-[32px] md:text-[36px] text-ink leading-tight">
          About the Analyst
        </h2>

        {/* Body text */}
        <div className="space-y-4">
          <p className="font-body text-text text-[15px] md:text-[16px] leading-relaxed">
            An intelligence operative from a post-scarcity civilization, assigned to study one of Earth's most chaotic systems:
            residential real estate. The logs you read here are structured field observations — part research, part reluctant fascination.
          </p>
          <p className="font-body text-text text-[15px] md:text-[16px] leading-relaxed">
            Each issue follows a strict protocol: <span className="text-orange font-semibold">Observation, Pattern, Implication, Optimization</span>.
            No opinions. No hype. Just signal.
          </p>
        </div>

        {/* CTA Link */}
        <a
          href="#"
          className="inline-flex items-center gap-2 font-body text-[13px] text-orange hover:text-orange-dark transition-colors group"
        >
          Read the full assignment brief
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </motion.div>
    </div>
  </section>
);

export default AboutStrip;
