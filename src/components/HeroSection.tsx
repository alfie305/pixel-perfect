import heroAstronaut from "@/assets/hero-astronaut.png";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-4 md:py-6">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left: Illustration */}
        <div className="w-full md:w-[45%] flex justify-center relative">
          <img
            src={heroAstronaut}
            alt="The Assignment astronaut mascot"
            className="w-[340px] md:w-[460px] lg:w-[520px] h-auto drop-shadow-lg" />

          
          <span className="absolute -bottom-3 -left-3 text-gray-1 text-lg">·  ·  ·</span>
          <span className="absolute top-1/4 -right-8 text-gray-1 text-sm">~ ~ ~</span>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-[60%] space-y-6">
          {/* Meta block */}
          <div className="font-mono text-xs text-gray-2 space-y-1 border border-gray-1 p-3 rounded-sm inline-block">
            <div>Field Assignment: Earth</div>
            <div>Sector: Residential Real Estate</div>
            <div>Status: <span className="text-orange">Active</span></div>
          </div>

          <h1 className="font-display font-extrabold text-3xl md:text-5xl leading-tight text-ink">
            Operational Intelligence for Agents Navigating Chaos
          </h1>

          <p className="font-body text-text-body text-lg max-w-lg">
            Structured field logs analyzing market shifts, AI infrastructure, brokerage systems, and capital flows — decoded and delivered.
          </p>

          {/* Social proof */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-1 border-2 border-paper" />
              <div className="w-8 h-8 rounded-full bg-gray-2 border-2 border-paper" />
              <div className="w-8 h-8 rounded-full bg-orange/40 border-2 border-paper" />
            </div>
            <span className="font-mono text-xs text-gray-2">Join 1,200+ agents receiving the logs</span>
          </div>

          {/* Email form */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-ink bg-paper font-body text-sm text-ink placeholder:text-gray-2 focus:outline-none focus:ring-2 focus:ring-orange" />

            <button className="bg-orange hover:bg-orange-dark text-primary-foreground font-display font-bold text-sm px-6 py-3 rounded-md border border-ink transition-colors whitespace-nowrap">
              Join the Transmission
            </button>
          </div>

          {/* Topic pills */}
          <div className="flex flex-wrap gap-2">
            {["Market Systems", "AI & Tech", "Brokerage Intel"].map((t) =>
            <span
              key={t}
              className="px-4 py-1.5 rounded-full border border-ink text-xs font-body text-ink hover:bg-ink/5 transition-colors cursor-pointer">

                {t}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;