import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="pt-16 pb-24 md:pt-28 md:pb-36 lg:pt-36 lg:pb-40 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          {/* Status and Specialization Header */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            <span
              id="hero-specialization-label"
              className="inline-flex items-center px-3 py-1 text-xs font-mono tracking-wider uppercase text-neutral-800 bg-neutral-100 border border-neutral-200"
            >
              {PERSONAL_INFO.heroLabel}
            </span>

            <div
              id="hero-status-indicator"
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-600"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-neutral-900 animate-pulse" />
              <span>{PERSONAL_INFO.status}</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1
            id="hero-title"
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-950 mb-4"
          >
            Hi, I'm {PERSONAL_INFO.shortName}.
          </h1>

          {/* Large Subtitle */}
          <p
            id="hero-subtitle"
            className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-neutral-600 mb-8"
          >
            {PERSONAL_INFO.tagline}
          </p>

          {/* Descriptions */}
          <div className="space-y-3 max-w-2xl text-base sm:text-lg text-neutral-700 leading-relaxed mb-12">
            <p id="hero-primary-desc" className="font-medium text-neutral-900">
              {PERSONAL_INFO.primaryDescription}
            </p>
            <p id="hero-secondary-desc" className="text-neutral-600">
              {PERSONAL_INFO.secondaryDescription}
            </p>
          </div>

          {/* Call to Actions & Profile Accent */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-2">
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              id="hero-btn-projects"
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-medium text-white bg-neutral-950 hover:bg-neutral-800 transition-all focus-visible:outline-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('contact')}
              id="hero-btn-contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-neutral-900 bg-transparent border border-neutral-300 hover:border-neutral-950 hover:bg-neutral-50 transition-all focus-visible:outline-2"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Subtle Institutional Anchor Info */}
          <div className="mt-16 pt-8 border-t border-neutral-200/80 flex flex-wrap items-center justify-between gap-y-3 text-xs font-mono text-neutral-500">
            <div>
              <span className="text-neutral-400">INSTITUTION:</span> {PERSONAL_INFO.university}
            </div>
            <div>
              <span className="text-neutral-400">SPECIALIZATION:</span> {PERSONAL_INFO.specialization}
            </div>
            <div>
              <span className="text-neutral-400">LOCATION:</span> Bukidnon, Philippines
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
