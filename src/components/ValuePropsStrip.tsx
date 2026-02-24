const props = [
{ icon: "●", title: "Observe", desc: "We track what's moving in the market" },
{ icon: "◈", title: "Analyze", desc: "We decode the system beneath the surface" },
{ icon: "▷", title: "Transmit", desc: "We deliver signal, not noise" }];


const ValuePropsStrip = () =>
<section className="container mx-auto px-4 py-12">
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {props.map((p, i) =>
    <div key={p.title} className={`text-center space-y-3 ${i < 2 ? "md:border-r md:border-ink/20" : ""}`}>
          <div className="text-orange text-2xl">{p.icon}</div>
          <h3 className="font-display font-bold text-lg text-ink">{p.title}</h3>
          <p className="font-body text-sm text-text-body">{p.desc}</p>
        </div>
    )}
    </div>
    
  </section>;


export default ValuePropsStrip;