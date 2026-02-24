const logs = [
{ num: "041", title: "The Inventory Paradox", desc: "Why rising inventory isn't lowering prices in key metros — and what agents should watch.", cat: "Market Systems", date: "Feb 18, 2026" },
{ num: "040", title: "AI Listing Tools: Signal vs Noise", desc: "Separating genuine AI productivity gains from marketing hype in real estate tech.", cat: "AI & Technology", date: "Feb 15, 2026" },
{ num: "039", title: "The Team Model Collapse", desc: "How mega-teams are fracturing under new compensation structures.", cat: "Brokerage Intel", date: "Feb 12, 2026" },
{ num: "038", title: "Capital Flow Reversal", desc: "Institutional investors are pulling back from single-family. What fills the gap?", cat: "Capital Flows", date: "Feb 9, 2026" },
{ num: "037", title: "Behavioral Drift in Buyers", desc: "Decision-making patterns are shifting post-rate-adjustment. Here's the data.", cat: "Behavioral Patterns", date: "Feb 6, 2026" },
{ num: "036", title: "The Brokerage OS Question", desc: "Which operating systems are actually helping agents close, and which are overhead?", cat: "Brokerage Intel", date: "Feb 3, 2026" }];


const RecentLogs = () =>
<section className="container mx-auto px-4 py-12">
    
    <h2 className="font-display font-bold text-2xl text-ink mb-8 relative inline-block">
      Recent Logs
      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-ink/30" />
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {logs.map((l) =>
    <div key={l.num} className="ink-card rounded-lg p-5 space-y-3 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-start justify-between">
            <div className="w-10 h-10 rounded-full dashed-placeholder text-[7px] shrink-0">Thumb</div>
            <span className="font-mono text-[11px] text-gray-2">#{l.num}</span>
          </div>
          <h4 className="font-display font-bold text-sm text-ink leading-snug">{l.title}</h4>
          <p className="font-body text-xs text-text-body leading-relaxed line-clamp-2">{l.desc}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange" />
              <span className="font-body text-[10px] text-gray-2">{l.cat}</span>
            </div>
            <span className="font-mono text-[10px] text-gray-2">{l.date}</span>
          </div>
        </div>
    )}
    </div>
    <div className="text-center mt-8">
      <button className="px-6 py-2.5 rounded-full border border-ink text-sm font-body text-ink hover:bg-ink/5 transition-colors">
        View Full Log Index →
      </button>
    </div>
  </section>;


export default RecentLogs;