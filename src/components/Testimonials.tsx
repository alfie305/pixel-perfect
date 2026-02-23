const testimonials = [
  { quote: "Finally, someone cutting through the noise. This is my Monday morning briefing now.", name: "Sarah K.", city: "Austin, TX" },
  { quote: "The 4-part log format is genius. Observation → Optimization. That's how I think about my business.", name: "Marcus D.", city: "Denver, CO" },
  { quote: "I forward this to my entire team every week. It's that good.", name: "Jennifer L.", city: "Miami, FL" },
  { quote: "The brokerage intel alone is worth it. Seeing patterns I'd never catch on my own.", name: "David R.", city: "Seattle, WA" },
  { quote: "Feels like having an analyst on retainer. But free. And funnier.", name: "Angela M.", city: "Chicago, IL" },
  { quote: "Stopped reading three other newsletters after subscribing to this one.", name: "Brian T.", city: "Phoenix, AZ" },
];

const TestimonialCard = ({ quote, name, city }: { quote: string; name: string; city: string }) => (
  <div className="ink-card rounded-lg p-5 min-w-[280px] max-w-[320px] shrink-0 mx-2 space-y-3">
    <p className="font-body text-sm text-text-body italic leading-relaxed">"{quote}"</p>
    <div className="font-mono text-xs text-gray-2">
      {name} · {city}
    </div>
  </div>
);

const Testimonials = () => (
  <section className="py-12 overflow-hidden">
    <div className="container mx-auto px-4 mb-8">
      <h2 className="font-display font-bold text-2xl text-ink relative inline-block">
        From the Field — What Agents Are Saying
        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-ink/30" />
      </h2>
    </div>
    <div className="relative group">
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
