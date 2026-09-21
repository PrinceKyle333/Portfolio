import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 md:py-32 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">03 //</span>
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            Skills & Competencies
          </h2>
          <div className="h-px bg-neutral-200 flex-1 ml-4" />
        </div>

        {/* Minimalist Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SKILL_CATEGORIES.map((categoryGroup, index) => (
            <div
              key={categoryGroup.category}
              className="border border-neutral-200 bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-900 transition-colors"
            >
              <div>
                {/* Category Number & Title */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-neutral-200">
                  <h3 className="text-base font-semibold text-neutral-950 tracking-tight">
                    {categoryGroup.category}
                  </h3>
                  <span className="font-mono text-xs text-neutral-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Skills tags/clean list */}
                <div className="flex flex-wrap gap-2">
                  {categoryGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-mono bg-neutral-100 text-neutral-800 border border-neutral-200 hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Minimal footer metadata */}
              <div className="mt-6 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>{categoryGroup.skills.length} competencies</span>
                <span className="text-neutral-300">•</span>
                <span>Active practice</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
