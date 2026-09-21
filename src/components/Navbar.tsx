import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 transition-colors duration-200 border-b ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-neutral-200 shadow-xs'
          : 'bg-white border-neutral-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Left: Full Name */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="group flex flex-col focus-visible:outline-hidden"
          id="nav-brand-link"
        >
          <span className="font-semibold text-sm sm:text-base tracking-tight text-neutral-950 uppercase group-hover:text-neutral-700 transition-colors">
            {PERSONAL_INFO.fullName}
          </span>
          <span className="font-mono text-xs text-neutral-500 hidden sm:inline-block">
            {PERSONAL_INFO.programShort} · {PERSONAL_INFO.specialization}
          </span>
        </a>

        {/* Right: Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 sm:space-x-2" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                id={`nav-link-${link.label.toLowerCase()}`}
                className={`px-3.5 py-2 text-sm transition-colors rounded-sm ${
                  isActive
                    ? 'text-neutral-950 font-medium bg-neutral-100'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
                }`}
              >
                {link.label}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            id="nav-cta-contact"
            className="ml-3 inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition-colors rounded-none"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-toggle"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
          className="md:hidden p-2 text-neutral-800 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-panel"
          className="md:hidden border-t border-neutral-200 bg-white px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="py-2.5 text-base font-medium text-neutral-800 hover:text-neutral-950 border-b border-neutral-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-neutral-400">#</span>
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-center font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-2 text-xs font-mono text-neutral-400">
            {PERSONAL_INFO.university} · {PERSONAL_INFO.specialization}
          </div>
        </div>
      )}
    </header>
  );
}
