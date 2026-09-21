import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 md:py-32 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">01 //</span>
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            About Me
          </h2>
          <div className="h-px bg-neutral-200 flex-1 ml-4" />
        </div>

        {/* Two-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-lg text-neutral-700 leading-relaxed">
              <p id="about-bio-1" className="font-normal">
                {PERSONAL_INFO.aboutBio1}
              </p>
              <p id="about-bio-2" className="text-neutral-600">
                {PERSONAL_INFO.aboutBio2}
              </p>
            </div>

            {/* Focus Areas */}
            <div className="pt-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                Core Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center px-3.5 py-1.5 text-xs font-mono bg-neutral-100 text-neutral-800 border border-neutral-200 hover:border-neutral-900 transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Information Grid */}
          <div className="lg:col-span-5">
            <div className="border border-neutral-200 bg-neutral-50/50 p-6 sm:p-8 space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 pb-3 border-b border-neutral-200">
                Student Profile Information
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <div className="text-xs font-mono text-neutral-500 uppercase tracking-wide mb-1">
                    Based in
                  </div>
                  <div className="text-sm sm:text-base font-medium text-neutral-900">
                    {PERSONAL_INFO.location}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-neutral-500 uppercase tracking-wide mb-1">
                    Program
                  </div>
                  <div className="text-sm sm:text-base font-medium text-neutral-900">
                    {PERSONAL_INFO.programShort}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-neutral-500 uppercase tracking-wide mb-1">
                    Specialization
                  </div>
                  <div className="text-sm sm:text-base font-medium text-neutral-900">
                    {PERSONAL_INFO.specialization}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-neutral-500 uppercase tracking-wide mb-1">
                    University
                  </div>
                  <div className="text-sm sm:text-base font-medium text-neutral-900">
                    {PERSONAL_INFO.university}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>AGE: {PERSONAL_INFO.age} YEARS OLD</span>
                <span>STATUS: ACTIVE ENROLLMENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
