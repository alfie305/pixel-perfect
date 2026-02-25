import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const testimonials = [
  { quote: "Finally, someone cutting through the noise. This is my Monday morning briefing now.", name: "Sarah K.", city: "Austin, TX" },
  { quote: "The 4-part log format is genius. Observation → Optimization. That's how I think about my business.", name: "Marcus D.", city: "Denver, CO" },
  { quote: "I forward this to my entire team every week. It's that good.", name: "Jennifer L.", city: "Miami, FL" },
  { quote: "The brokerage intel alone is worth it. Seeing patterns I'd never catch on my own.", name: "David R.", city: "Seattle, WA" },
  { quote: "Feels like having an analyst on retainer. But free. And funnier.", name: "Angela M.", city: "Chicago, IL" },
  { quote: "Stopped reading three other newsletters after subscribing to this one.", name: "Brian T.", city: "Phoenix, AZ" },
];

const TestimonialCard = ({ quote, name, city }: { quote: string; name: string; city: string }) => (
  <Tilt
    tiltMaxAngleDegree={5}
    scale={1.02}
    transitionSpeed={300}
    glareEnable={false}
    className="min-w-[280px] max-w-[320px] shrink-0 mx-2"
  >
    <div className="ink-card rounded-lg p-5 space-y-3 h-full">
      <p className="font-body text-sm text-text-body italic leading-relaxed">"{quote}"</p>
      <div className="font-mono text-xs text-gray-2">
        {name} · {city}
      </div>
    </div>
  </Tilt>
);

const Testimonials = () => (
  <section className="py-12 overflow-hidden">
    <motion.div
      className="container mx-auto px-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display font-bold text-2xl text-ink relative inline-block">
        From the Field — What Agents Are Saying
        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-ink/30" />
      </h2>
    </motion.div>

    <motion.div
      className="relative group"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Testimonials;
