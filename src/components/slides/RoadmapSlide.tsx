import { SlideContent } from '../../data/slides';
import DataRefBadge from '../DataRefBadge';

interface RoadmapSlideProps {
  slide: SlideContent;
  slideNumber: number;
  totalSlides: number;
}

export default function RoadmapSlide({ slide }: RoadmapSlideProps) {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-primary-950/20">
      {/* Header */}
      <div className="px-8 md:px-16 pt-12 pb-6 animate-slide-up">
        {slide.subtitle && (
          <p className="text-sm uppercase tracking-wider mb-2 text-primary-400">
            {slide.subtitle}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          {slide.title}
        </h2>
        {slide.claim && (
          <p className="mt-3 text-lg text-primary-300 font-medium">
            {slide.claim}
          </p>
        )}
      </div>

      {/* Roadmap Timeline */}
      {slide.roadmap && (
        <div className="flex-1 px-8 md:px-16 pb-8 overflow-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-purple-500 to-primary-500/30 hidden md:block" />

            {/* Phases */}
            <div className="space-y-6 md:space-y-8">
              {slide.roadmap.map((phase, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row md:items-start gap-4 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Phase Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className={`bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-primary-500/30 transition-colors ${
                      index % 2 === 0 ? 'md:ml-auto' : ''
                    } max-w-md`}>
                      {/* Phase Header */}
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        {phase.icon && (
                          <span className="text-2xl">{phase.icon}</span>
                        )}
                        <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                          <span className="text-xs font-mono text-primary-400 block">{phase.phase}</span>
                          <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                        </div>
                      </div>

                      {/* Phase Items */}
                      <ul className={`space-y-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {phase.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className={`flex items-center gap-2 text-sm text-slate-300 ${
                              index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500/50 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Dot (Desktop) */}
                  <div className="hidden md:flex items-center justify-center w-12 flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-primary-500 border-4 border-slate-900 shadow-lg shadow-primary-500/30" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Data References */}
      {slide.dataRefs && slide.dataRefs.length > 0 && (
        <div className="px-8 md:px-16 pb-8 flex flex-wrap gap-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
          {slide.dataRefs.map((ref) => (
            <DataRefBadge key={ref.id} dataRef={ref} />
          ))}
        </div>
      )}
    </div>
  );
}
