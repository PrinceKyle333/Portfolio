import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-white py-16 text-neutral-900 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-12 border-b border-neutral-200">
          {/* Identity */}
          <div className="space-y-2">
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 uppercase">
              {PERSONAL_INFO.fullName}
            </div>
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              {PERSONAL_INFO.heroLabel}
            </div>
            <div className="text-xs font-mono text-neutral-400">
              {PERSONAL_INFO.university} · {PERSONAL_INFO.location}
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <nav className="flex items-center space-x-6 text-sm font-mono text-neutral-600" aria-label="Social links">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.type !== 'email' ? '_blank' : undefined}
                  rel={link.type !== 'email' ? 'noreferrer' : undefined}
                  className="hover:text-neutral-950 transition-colors underline-offset-4 hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={scrollToTop}
              id="footer-back-to-top"
              aria-label="Back to top"
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-mono uppercase tracking-wider text-neutral-600 hover:text-neutral-950 border border-neutral-200 hover:border-neutral-950 bg-neutral-50 transition-colors self-start sm:self-auto"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © 2026 {PERSONAL_INFO.fullName}
          </div>
          <div>
            Designed with precision, whitespace, and typographic discipline.
          </div>
        </div>
      </div>
    </footer>
  );
}
