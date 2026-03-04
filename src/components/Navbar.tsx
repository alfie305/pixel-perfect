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
  <div className="flex items-center gap-2.5">
    <div className="w-8 h-8 rounded-xl bg-orange flex items-center justify-center shrink-0">
      <span className="font-display font-bold text-[11px] text-white leading-none">TA</span>
    </div>
    <span className="font-display font-bold text-[19px] text-ink">The Assignment</span>
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
          ? "bg-card shadow-clay border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
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
              className="font-body text-[13px] text-text hover:text-orange transition-colors cursor-pointer relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-ink hover:text-orange transition-colors p-2 hover:bg-orange/10 rounded-lg" aria-label="Search">
            <Search className="w-[18px] h-[18px]" strokeWidth={2} />
          </button>
          <Link
            to="bottom-cta"
            smooth
            duration={600}
            offset={-70}
            className="bg-orange text-white font-display font-bold text-[13px] px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer hover:translate-y-[-1px] hover:shadow-glow-sm"
          >
            Join Transmission
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button className="text-ink hover:text-orange transition-colors p-2" aria-label="Search">
            <Search className="w-[18px] h-[18px]" strokeWidth={2} />
          </button>
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-ink hover:text-orange transition-colors p-2" aria-label="Menu">
                <Menu className="w-[22px] h-[22px]" strokeWidth={2} />
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
                      activeClass="bg-orange/15 text-orange border-orange/40"
                      className="font-body text-[14px] text-text hover:text-orange hover:bg-orange/10 transition-all cursor-pointer px-4 py-3 rounded-xl border border-transparent"
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
                    className="block w-full text-center bg-orange text-white font-display font-bold text-[13px] px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer hover:translate-y-[-1px]"
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
