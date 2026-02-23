import { Twitter, Mail, Rss } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-ink/20">
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full dashed-placeholder text-[6px]">Logo</div>
            <span className="font-display font-bold text-ink">The Assignment</span>
          </div>
          <p className="font-mono text-[11px] text-gray-2">Assignment Status: Ongoing</p>
        </div>

        <div className="flex gap-8">
          {["Logs", "About", "Protocol", "Contact"].map((l) => (
            <a key={l} href="#" className="font-body text-sm text-text-body hover:text-ink transition-colors">{l}</a>
          ))}
        </div>

        <div className="flex gap-3">
          <a href="#" className="text-ink hover:text-orange transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="text-ink hover:text-orange transition-colors" aria-label="Email"><Mail className="w-5 h-5" /></a>
          <a href="#" className="text-ink hover:text-orange transition-colors" aria-label="RSS"><Rss className="w-5 h-5" /></a>
        </div>
      </div>

      <div className="ink-divider mt-8 mb-4" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-mono text-[10px] text-gray-2">
          © 2026 The Assignment · Field Assignment: Earth · Sector: Residential Real Estate
        </p>
        <div className="flex gap-4">
          <a href="#" className="font-mono text-[10px] text-gray-2 hover:text-ink transition-colors">Privacy Policy</a>
          <a href="#" className="font-mono text-[10px] text-gray-2 hover:text-ink transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
