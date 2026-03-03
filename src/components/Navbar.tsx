import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Search, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Logs",        to: "logs" },
  { label: "Latest",      to: "latest" },
  { label: "Protocol",    to: "protocol" },
  { label: "The Analyst", to: "the-analyst" },
];

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-full bg-orange flex items-center justify-center shrink-0 shadow-glow-sm">
      <span className="font-display font-bold text-[11px] text-white leading-none">TA</span>
    </div>
    <span className="font-display font-bold text-xl text-ink">The Assignment</span>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-paper/80 shadow-lift border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={600}
              offset={-70}
              spy
              activeClass="text-orange"
              onSetActive={() => setActiveSection(to)}
              className="font-body text-sm text-text hover:text-orange transition-colors cursor-pointer relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-ink hover:text-orange transition-colors p-2 hover:bg-orange/10 rounded-lg" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <Link
            to="bottom-cta"
            smooth
            duration={600}
            offset={-70}
            className="bg-orange hover:scale-105 text-white font-display font-bold text-sm px-5 py-2.5 rounded-lg border border-orange-dark transition-all duration-300 cursor-pointer shadow-glow-sm hover:shadow-glow-md"
          >
            Join Transmission
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button className="text-ink hover:text-orange transition-colors p-2" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-ink hover:text-orange transition-colors p-2" aria-label="Menu">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="glass-card border-l border-border w-[280px]">
              <div className="flex flex-col h-full pt-8 pb-6 px-4">
                <Logo />
                <nav className="flex flex-col gap-2 mt-8">
                  {navLinks.map(({ label, to }) => (
                    <Link
                      key={to}
                      to={to}
                      smooth
                      duration={600}
                      offset={-70}
                      spy
                      activeClass="bg-orange/20 text-orange border-orange/50"
                      className="font-body text-base text-text hover:text-orange hover:bg-orange/10 transition-all cursor-pointer px-4 py-3 rounded-lg border border-transparent"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-6 border-t border-border">
                  <Link
                    to="bottom-cta"
                    smooth
                    duration={600}
                    offset={-70}
                    className="block w-full text-center bg-orange hover:scale-105 text-white font-display font-bold text-sm px-4 py-3 rounded-lg border border-orange-dark transition-all duration-300 cursor-pointer shadow-glow-sm"
                  >
                    Join Transmission
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
