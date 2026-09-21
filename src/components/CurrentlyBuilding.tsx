import { Terminal, Database, Layers, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function CurrentlyBuilding() {
  const { currentlyBuilding } = PERSONAL_INFO;

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('project-01');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="currently-building"
      aria-label="Active Development Status"
      className="py-16 bg-neutral-950 text-white border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Status dispatch left */}
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-2.5 py-1 text-xs font-mono font-medium tracking-wider bg-neutral-800 text-neutral-200 border border-neutral-700">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>{currentlyBuilding.status}</span>
              </span>

              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                Active Project Dispatch
              </span>
            </div>

            <div>
              <div className="text-xs font-mono text-neutral-400 mb-1">CURRENT INITIATIVE:</div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {currentlyBuilding.title}
              </h2>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {currentlyBuilding.description}
            </p>

            {/* Quick architectural highlights */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-neutral-400" />
                PostgreSQL + PostGIS spatial geometry
              </span>
              <span className="hidden sm:inline text-neutral-700">•</span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-neutral-400" />
                CesiumJS 3D virtual globe tiles
              </span>
              <span className="hidden sm:inline text-neutral-700">•</span>
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-neutral-400" />
                Central Mindanao University Campus Assets
              </span>
            </div>
          </div>

          {/* Action button right */}
          <div className="flex items-center self-start lg:self-center">
            <a
              href="#project-01"
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono uppercase tracking-wider text-neutral-950 bg-white hover:bg-neutral-200 transition-colors"
            >
              <span>Inspect Architecture</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
