import { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import Tilt from 'react-parallax-tilt';
import heroAstronaut from "@/assets/hero-astronaut.png";
import SubscribeModal from './SubscribeModal';

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
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="container mx-auto px-4 py-4 md:py-6">
      <div className="flex flex-col md:flex-row items-center gap-12">

        {/* Left: Illustration with 3D tilt */}
        <motion.div
          className="w-full md:w-[45%] flex justify-center relative"
          initial="hidden"
          animate="show"
          variants={slideLeft}
        >
          <Tilt
            tiltMaxAngleDegree={8}
            scale={1.02}
            transitionSpeed={400}
            glareEnable={false}
            className="w-[340px] md:w-[460px] lg:w-[520px]"
          >
            <img
              src={heroAstronaut}
              alt="The Assignment astronaut mascot"
              className="w-full h-auto drop-shadow-lg"
            />
          </Tilt>
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
          {/* Meta block with typewriter status */}
          <motion.div
            variants={fadeUp}
            className="font-mono text-xs text-gray-2 space-y-1 border border-gray-1 p-3 rounded-sm inline-block"
          >
            <div>Field Assignment: Earth</div>
            <div>Sector: Residential Real Estate</div>
            <div>
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

          <motion.h1
            variants={fadeUp}
            className="font-display font-extrabold text-3xl md:text-5xl leading-tight text-ink"
          >
            Operational Intelligence for Agents Navigating Chaos
          </motion.h1>

          <motion.p variants={fadeUp} className="font-body text-text-body text-lg max-w-lg">
            Structured field logs analyzing market shifts, AI infrastructure, brokerage systems, and capital flows — decoded and delivered.
          </motion.p>

          {/* Latest issue link */}
          <motion.a
            variants={fadeUp}
            href="#latest"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-orange hover:underline underline-offset-4"
          >
            ↗ Latest field log — read now
          </motion.a>

          {/* Social proof with animated count */}
          <motion.div variants={fadeUp} className="flex items-center gap-2">
            <div className="flex">
              {['MR', 'JT', 'AK'].map((init, i) => (
                <div
                  key={init}
                  className="w-8 h-8 rounded-full bg-orange/20 border-2 border-paper flex items-center justify-center"
                  style={{ marginLeft: i === 0 ? 0 : '-8px' }}
                >
                  <span className="font-mono text-[8px] text-orange font-bold">{init}</span>
                </div>
              ))}
            </div>
            <span className="font-mono text-xs text-gray-2">
              Join{' '}
              <CountUp end={1200} suffix="+" duration={2.5} enableScrollSpy scrollSpyOnce />
              {' '}agents receiving the logs
            </span>
          </motion.div>

          {/* Subscribe button */}
          <motion.div
            variants={fadeUp}
            className="max-w-md"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="bg-orange hover:bg-orange-dark text-primary-foreground font-display font-bold text-sm px-6 py-3 rounded-md border border-ink transition-colors whitespace-nowrap"
            >
              Join the Transmission
            </button>
          </motion.div>

          {/* Subscribe Modal */}
          <SubscribeModal open={modalOpen} onOpenChange={setModalOpen} />

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
