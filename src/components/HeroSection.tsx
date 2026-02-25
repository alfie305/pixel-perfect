import { motion } from 'framer-motion';
import heroAstronaut from "@/assets/hero-astronaut.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-4 md:py-6">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left: Illustration */}
        <motion.div
          className="w-full md:w-[45%] flex justify-center relative"
          initial="hidden"
          animate="show"
          variants={slideLeft}
        >
          <img
            src={heroAstronaut}
            alt="The Assignment astronaut mascot"
            className="w-[340px] md:w-[460px] lg:w-[520px] h-auto drop-shadow-lg"
          />
          <span className="absolute -bottom-3 -left-3 text-gray-1 text-lg">·  ·  ·</span>
          <span className="absolute top-1/4 -right-8 text-gray-1 text-sm">~ ~ ~</span>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="w-full md:w-[60%] space-y-6"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          {/* Meta block */}
          <motion.div
            variants={fadeUp}
            className="font-mono text-xs text-gray-2 space-y-1 border border-gray-1 p-3 rounded-sm inline-block"
          >
            <div>Field Assignment: Earth</div>
            <div>Sector: Residential Real Estate</div>
            <div>Status: <span className="text-orange">Active</span></div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display font-extrabold text-3xl md:text-5xl leading-tight text-ink"
          >
            Operational Intelligence for Agents Navigating Chaos
          </motion.h1>

          <motion.p variants={fadeUp} className="font-body text-text-body text-lg max-w-lg">
            Structured field logs analyzing market shifts, AI infrastructure, brokerage systems, and capital flows — decoded and delivered.
          </motion.p>

          {/* Social proof */}
          <motion.div variants={fadeUp} className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-1 border-2 border-paper" />
              <div className="w-8 h-8 rounded-full bg-gray-2 border-2 border-paper" />
              <div className="w-8 h-8 rounded-full bg-orange/40 border-2 border-paper" />
            </div>
            <span className="font-mono text-xs text-gray-2">Join 1,200+ agents receiving the logs</span>
          </motion.div>

          {/* Email form */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-ink bg-paper font-body text-sm text-ink placeholder:text-gray-2 focus:outline-none focus:ring-2 focus:ring-orange"
            />
            <button className="bg-orange hover:bg-orange-dark text-primary-foreground font-display font-bold text-sm px-6 py-3 rounded-md border border-ink transition-colors whitespace-nowrap">
              Join the Transmission
            </button>
          </motion.div>

          {/* Topic pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {["Market Systems", "AI & Tech", "Brokerage Intel"].map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 rounded-full border border-ink text-xs font-body text-ink hover:bg-ink/5 transition-colors cursor-pointer"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
