import { GraduationCap, School, BookOpen } from 'lucide-react';

interface TimelineEntry {
  stage: string;
  stageCode: string;
  institutions: Array<{
    name: string;
    details?: string[];
    isCollege?: boolean;
  }>;
}

export default function Journey() {
  const journeyStages: TimelineEntry[] = [
    {
      stage: 'College',
      stageCode: 'HIGHER_EDUCATION',
      institutions: [
        {
          name: 'Central Mindanao University',
          details: [
            'Bachelor of Science in Information Technology (BSIT)',
            'Specialization: Information Management',
          ],
          isCollege: true,
        },
      ],
    },
    {
      stage: 'Senior High School',
      stageCode: 'SECONDARY_SENIOR',
      institutions: [
        {
          name: 'San Isidro High School of Malipayon, Inc.',
        },
      ],
    },
    {
      stage: 'Junior High School',
      stageCode: 'SECONDARY_JUNIOR',
      institutions: [
        {
          name: 'Langcataon National High School',
        },
        {
          name: 'Manolo Fortich National High School',
        },
      ],
    },
    {
      stage: 'Elementary',
      stageCode: 'PRIMARY_EDUCATION',
      institutions: [
        {
          name: 'Malipayon Elementary School',
        },
      ],
    },
  ];

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="py-24 md:py-32 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">04 //</span>
          <h2 id="journey-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            My Journey
          </h2>
          <div className="h-px bg-neutral-200 flex-1 ml-4" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl">
          <div className="relative border-l border-neutral-300 ml-4 sm:ml-6 pl-8 sm:pl-12 space-y-14">
            {journeyStages.map((stageItem) => (
              <div key={stageItem.stage} className="relative group">
                {/* Node Point */}
                <div className="absolute -left-[39px] sm:-left-[55px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-neutral-950 group-hover:bg-neutral-950 transition-colors" />

                {/* Stage Header */}
                <div className="flex flex-wrap items-baseline gap-3 mb-3">
                  <span className="text-xs font-mono tracking-wider uppercase text-neutral-500 bg-neutral-100 px-2 py-0.5 border border-neutral-200">
                    {stageItem.stage}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    {stageItem.stageCode}
                  </span>
                </div>

                {/* Institutions within this stage */}
                <div className="space-y-4">
                  {stageItem.institutions.map((inst) => (
                    <div
                      key={inst.name}
                      className={`p-5 sm:p-6 border transition-colors ${
                        inst.isCollege
                          ? 'border-neutral-900 bg-neutral-50/50'
                          : 'border-neutral-200 bg-white hover:border-neutral-400'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {inst.isCollege ? (
                          <GraduationCap className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                        ) : stageItem.stage.includes('High') ? (
                          <School className="w-4 h-4 text-neutral-600 shrink-0 mt-0.5" />
                        ) : (
                          <BookOpen className="w-4 h-4 text-neutral-600 shrink-0 mt-0.5" />
                        )}

                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-semibold text-neutral-950 tracking-tight">
                            {inst.name}
                          </h3>

                          {inst.details && (
                            <div className="space-y-1 pt-1 border-t border-neutral-200/80">
                              {inst.details.map((detail, idx) => (
                                <p
                                  key={detail}
                                  className={`text-sm ${
                                    idx === 0
                                      ? 'font-medium text-neutral-900'
                                      : 'font-mono text-xs text-neutral-600'
                                  }`}
                                >
                                  {detail}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
