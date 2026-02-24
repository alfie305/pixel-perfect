const FeaturedLog = () => (
  <section className="container mx-auto px-4 py-12">
    <h2 className="font-display font-bold text-2xl text-ink mb-8 relative inline-block">
      Latest Field Log
      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-ink/30" style={{ borderRadius: "50%" }} />
    </h2>
    <div className="ink-card rounded-lg overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-[40%] p-6">
        <div className="dashed-placeholder w-full h-[250px] md:h-full rounded-md">
          Character — Log Hero<br />~800 × 400px
        </div>
      </div>
      <div className="md:w-[60%] p-6 md:p-8 flex flex-col justify-center space-y-4">
        <div className="font-mono text-xs text-gray-2">
          LOG #042 · Market Systems · 5 min read · Feb 20, 2026
        </div>
        <h3 className="font-display font-bold text-xl md:text-2xl text-ink">
          Commission Compression and the Coming Brokerage Consolidation Wave
        </h3>
        <p className="font-body text-text-body text-sm leading-relaxed">
          A deep analysis of how compressed commission structures are accelerating consolidation
          among mid-tier brokerages, and what it signals for independent operators in 2026.
        </p>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full border border-ink text-xs font-body text-ink">Market Systems</span>
        </div>
        <button className="self-start bg-orange hover:bg-orange-dark text-primary-foreground font-display font-bold text-sm px-6 py-2.5 rounded-md border border-ink transition-colors">
          Read Full Log
        </button>
      </div>
    </div>
  </section>
);

export default FeaturedLog;
