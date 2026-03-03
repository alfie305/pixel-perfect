import { Twitter, Mail, Rss } from "lucide-react";

const Footer = () => (
  <footer className="glass-card border-t border-border">
    <div className="container mx-auto px-4 py-12 md:py-14 max-w-6xl">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
        {/* Brand Section */}
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-orange flex items-center justify-center shrink-0">
              <span className="font-display font-bold text-[11px] text-white leading-none">TA</span>
            </div>
            <span className="font-display font-bold text-[19px] text-ink">The Assignment</span>
          </div>
          <p className="font-body text-[13px] text-text max-w-sm leading-relaxed">
            Operational intelligence for agents navigating chaos. Weekly field logs analyzing market shifts, AI infrastructure, and brokerage systems.
          </p>
          <p className="font-mono text-[10px] text-orange uppercase tracking-wide">
            Assignment Status: <span className="animate-pulse">● Active</span>
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-[11px] text-ink uppercase tracking-wider">
            Navigation
          </h4>
          <ul className="space-y-2.5">
            {["Latest Logs", "All Signals", "Protocol", "The Analyst"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="font-body text-[13px] text-text hover:text-orange transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-orange transition-all duration-300" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Section */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-[11px] text-ink uppercase tracking-wider">
            Connect
          </h4>
          <div className="flex gap-2.5">
            <a
              href="#"
              className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-ink hover:text-orange hover:border-orange/50 transition-all group"
              aria-label="Twitter"
            >
              <Twitter className="w-[17px] h-[17px] group-hover:scale-105 transition-transform" strokeWidth={2} />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-ink hover:text-orange hover:border-orange/50 transition-all group"
              aria-label="Email"
            >
              <Mail className="w-[17px] h-[17px] group-hover:scale-105 transition-transform" strokeWidth={2} />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-ink hover:text-orange hover:border-orange/50 transition-all group"
              aria-label="RSS"
            >
              <Rss className="w-[17px] h-[17px] group-hover:scale-105 transition-transform" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[10px] text-text-muted text-center sm:text-left">
          © 2026 The Assignment · Field Assignment: Earth · Sector: Residential Real Estate
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="font-mono text-[10px] text-text-muted hover:text-orange transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="font-mono text-[10px] text-text-muted hover:text-orange transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
