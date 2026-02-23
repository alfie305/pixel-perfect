const BottomCTA = () => (
  <section className="bg-ink/5 py-16">
    <div className="container mx-auto px-4 text-center max-w-lg space-y-5">
      <h2 className="font-display font-bold text-3xl text-ink">Receive Field Logs Directly</h2>
      <p className="font-body text-text-body">
        Structured intelligence. No noise. No hype.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-md border border-ink bg-paper font-body text-sm text-ink placeholder:text-gray-2 focus:outline-none focus:ring-2 focus:ring-orange"
        />
        <button className="bg-orange hover:bg-orange-dark text-primary-foreground font-display font-bold text-sm px-6 py-3 rounded-md border border-ink transition-colors whitespace-nowrap">
          Join Transmission
        </button>
      </div>
      <p className="font-mono text-[11px] text-gray-2">
        Free · No clickbait · Unsubscribe anytime
      </p>
    </div>
  </section>
);

export default BottomCTA;
