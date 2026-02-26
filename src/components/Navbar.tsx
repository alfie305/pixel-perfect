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
    <div className="w-8 h-8 rounded-full bg-orange flex items-center justify-center shrink-0">
      <span className="font-display font-bold text-[11px] text-white leading-none">TA</span>
    </div>
    <span className="font-display font-bold text-xl text-ink">The Assignment</span>
  </div>
);

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
              className="font-body text-sm text-text-body hover:text-ink transition-colors cursor-pointer"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-ink hover:text-orange transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <Link
            to="bottom-cta"
            smooth
            duration={600}
            offset={-70}
            className="bg-orange hover:bg-orange-dark text-white font-display font-bold text-sm px-4 py-2 rounded-md border border-ink transition-colors cursor-pointer"
          >
            Join Transmission
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button className="text-ink hover:text-orange transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-ink hover:text-orange transition-colors" aria-label="Menu">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-paper border-l border-ink/20 w-[260px]">
              <div className="flex flex-col h-full pt-8 pb-6 px-2">
                <Logo />
                <nav className="flex flex-col gap-1 mt-8">
                  {navLinks.map(({ label, to }) => (
                    <Link
                      key={to}
                      to={to}
                      smooth
                      duration={600}
                      offset={-70}
                      className="font-body text-base text-text-body hover:text-ink hover:bg-ink/5 transition-colors cursor-pointer px-3 py-2.5 rounded-md"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto">
                  <Link
                    to="bottom-cta"
                    smooth
                    duration={600}
                    offset={-70}
                    className="block w-full text-center bg-orange hover:bg-orange-dark text-white font-display font-bold text-sm px-4 py-3 rounded-md border border-ink transition-colors cursor-pointer"
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
