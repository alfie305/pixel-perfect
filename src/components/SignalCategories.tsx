const categories = [
  { title: "Market Systems", desc: "Price movements, inventory signals, and capital flow patterns", tier: "Free" },
  { title: "AI & Technology", desc: "Adoption curves, tools, and infrastructure shifts reshaping the industry", tier: "Free" },
  { title: "Brokerage Intel", desc: "Operational patterns, inefficiencies, and structural changes in brokerage models", tier: "Free" },
  { title: "Deep Analysis", desc: "Extended logs with full data modeling and predictive frameworks", tier: "PRO" },
];

const SignalCategories = () => (
  <section className="container mx-auto px-4 py-12">
    <h2 className="font-display font-bold text-2xl text-ink mb-8 relative inline-block">
      Signal Categories
      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-ink/30" />
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {categories.map((c) => (
        <div key={c.title} className="ink-card rounded-lg p-6 space-y-3 hover:shadow-md transition-shadow cursor-pointer relative">
          {c.tier === "PRO" && (
            <span className="absolute top-4 right-4 bg-orange text-primary-foreground font-mono text-[10px] font-bold px-2 py-0.5 rounded border border-ink">
              PRO
            </span>
          )}
          <div className="w-2 h-2 rounded-full bg-orange inline-block" />
          <h3 className="font-display font-bold text-lg text-ink">{c.title}</h3>
          <p className="font-body text-sm text-text-body">{c.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default SignalCategories;
