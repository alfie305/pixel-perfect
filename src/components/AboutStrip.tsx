const AboutStrip = () => (
  <section className="container mx-auto px-4 py-16">
    <div className="ink-divider mb-10" />
    <div className="flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-[35%] flex justify-center">
        <div className="w-[250px] h-[300px] border-2 border-dashed border-gray-1 rounded-lg flex items-center justify-center text-gray-2 font-mono text-xs">Character Illustration</div>
      </div>
      <div className="w-full md:w-[65%] space-y-5">
        <div className="font-mono text-xs text-gray-2 space-y-1 border border-gray-1 p-3 rounded-sm inline-block">
          <div>Origin: The Continuum</div>
          <div>Assignment: Earth</div>
          <div>Objective: Reduce noise. Increase signal.</div>
        </div>
        <h2 className="font-display font-bold text-2xl text-ink">About the Analyst</h2>
        <p className="font-body text-text-body leading-relaxed">
          An intelligence operative from a post-scarcity civilization, assigned to study one of Earth's most chaotic systems: 
          residential real estate. The logs you read here are structured field observations — part research, part reluctant fascination.
        </p>
        <p className="font-body text-text-body leading-relaxed">
          Each issue follows a strict protocol: Observation, Pattern, Implication, Optimization. 
          No opinions. No hype. Just signal.
        </p>
        <a href="#" className="inline-block font-body text-sm text-orange hover:text-orange-dark transition-colors underline underline-offset-4">
          Read the full assignment brief →
        </a>
      </div>
    </div>
  </section>
);

export default AboutStrip;
