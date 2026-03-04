import { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import Tilt from 'react-parallax-tilt';
import heroAstronaut from "@/assets/hero-astronaut.png";
import SubscribeModal from './SubscribeModal';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-12">

        {/* Left: Illustration with 3D tilt */}
        <motion.div
          className="w-full md:w-[45%] flex justify-center relative"
          initial="hidden"
          animate="show"
          variants={slideLeft}
        >
          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            scale={1.02}
            transitionSpeed={400}
            glareEnable={false}
            className="w-[340px] md:w-[460px] lg:w-[520px]"
          >
            <img
              src={heroAstronaut}
              alt="The Assignment astronaut mascot"
              className="w-full h-auto drop-shadow-2xl"
            />
          </Tilt>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="w-full md:w-[55%] space-y-6"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          {/* Meta block with glass effect */}
          <motion.div
            variants={fadeUp}
            className="glass-card font-mono text-xs space-y-1.5 px-6 py-4 inline-block border border-border/50"
          >
            <div className="text-text-muted">Field Assignment: Earth</div>
            <div className="text-text-muted">Sector: Residential Real Estate</div>
            <div className="text-text-muted">
              Status:{' '}
              <span className="text-orange">
                <TypeAnimation
                  sequence={[
                    'Active', 2500,
                    'Transmitting...', 1800,
                    'Scanning signals...', 1800,
                    'Active', 2500,
                  ]}
                  repeat={Infinity}
                  speed={45}
                />
              </span>
            </div>
          </motion.div>

          {/* Headline with Gradient */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight text-ink"
          >
            The 5-Minute Brief That Makes You the Smartest Agent in the Room
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="font-body text-text text-lg md:text-xl leading-relaxed max-w-xl"
          >
            AI analyzes every market shift, tech adoption, and brokerage move—delivering actionable intelligence before your competition even sees it happening.
          </motion.p>

          {/* Latest issue link */}
          <motion.a
            variants={fadeUp}
            href="#latest"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-orange hover:text-orange-glow transition-colors underline-offset-4 hover:underline"
          >
            ↗ Latest field log — read now
          </motion.a>

          {/* Social proof with animated count */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <div className="flex">
              {['MR', 'JT', 'AK'].map((init, i) => (
                <div
                  key={init}
                  className="w-10 h-10 rounded-full bg-card border-2 border-orange/40 flex items-center justify-center shadow-clay-sm"
                  style={{ marginLeft: i === 0 ? 0 : '-12px', zIndex: 3 - i }}
                >
                  <span className="font-mono text-[10px] text-orange font-bold">{init}</span>
                </div>
              ))}
            </div>
            <span className="font-mono text-sm text-text-muted">
              Join{' '}
              <CountUp end={1200} suffix="+" duration={2.5} enableScrollSpy scrollSpyOnce className="text-orange font-semibold" />
              {' '}agents receiving the logs
            </span>
          </motion.div>

          {/* Subscribe button */}
          <motion.div variants={fadeUp} className="pt-2">
            <button
              onClick={() => setModalOpen(true)}
              className="cta-button-primary text-base shadow-glow-sm hover:shadow-glow-md"
            >
              Join the Transmission
            </button>
          </motion.div>

          {/* Subscribe Modal */}
          <SubscribeModal open={modalOpen} onOpenChange={setModalOpen} />

          {/* Topic pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
            {["Market Systems", "AI & Tech", "Brokerage Intel"].map((t) => (
              <span
                key={t}
                className="px-5 py-2 rounded-full glass-card text-sm font-body text-ink hover:border-orange/50 hover:shadow-glow-sm transition-all cursor-pointer"
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
