import { useState, useEffect } from "react";
import { Search } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full dashed-placeholder text-[8px]">Logo</div>
          <span className="font-display font-bold text-xl text-ink">The Assignment</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="font-body text-sm text-text-body hover:text-ink transition-colors">Logs</a>
          <a href="#" className="font-body text-sm text-text-body hover:text-ink transition-colors">Latest</a>
          <a href="#" className="font-body text-sm text-text-body hover:text-ink transition-colors">Protocol</a>
          <a href="#" className="font-body text-sm text-text-body hover:text-ink transition-colors">The Analyst</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-ink hover:text-orange transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button className="bg-orange hover:bg-orange-dark text-primary-foreground font-display font-bold text-sm px-4 py-2 rounded-md border border-ink transition-colors">
            Join Transmission
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
