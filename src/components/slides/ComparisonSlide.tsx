import { SlideContent } from '../../data/slides';
import DataRefBadge from '../DataRefBadge';

interface ComparisonSlideProps {
  slide: SlideContent;
  slideNumber: number;
  totalSlides: number;
}

export default function ComparisonSlide({ slide }: ComparisonSlideProps) {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-purple-950/20">
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

      {/* Comparison Table */}
      {slide.comparisonTable && (
        <div className="flex-1 px-8 md:px-16 pb-8 overflow-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
          <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50">
            <table className="w-full">
              <thead>
                <tr>
                  {slide.comparisonTable.headers.map((header, index) => (
                    <th
                      key={index}
                      className={`px-6 py-4 text-left text-sm font-semibold border-b border-slate-600 ${
                        index === 0
                          ? 'bg-slate-800/80 text-slate-300 w-1/5'
                          : index === 1
                          ? 'bg-bangkok-orange/10 text-bangkok-orange w-2/5'
                          : 'bg-okinawa-ocean/10 text-okinawa-ocean w-2/5'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {index === 1 && <span className="text-lg">🇹🇭</span>}
                        {index === 2 && <span className="text-lg">🇯🇵</span>}
                        {header}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {slide.comparisonTable.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-slate-700/30 transition-colors">
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`px-6 py-4 text-sm border-b border-slate-700/50 ${
                          cellIndex === 0
                            ? 'font-medium text-slate-400 bg-slate-800/30'
                            : 'text-slate-200'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Caption */}
          {slide.comparisonTable.caption && (
            <p className="mt-4 text-xs text-slate-500 italic">
              {slide.comparisonTable.caption}
            </p>
          )}
        </div>
      )}

      {/* Data References */}
      {slide.dataRefs && slide.dataRefs.length > 0 && (
        <div className="px-8 md:px-16 pb-4 flex flex-wrap gap-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
          {slide.dataRefs.map((ref) => (
            <DataRefBadge key={ref.id} dataRef={ref} />
          ))}
        </div>
      )}

      {/* Legal Disclaimer */}
      {slide.legalDisclaimer && (
        <div className="px-8 md:px-16 pb-8">
          <p className="text-xs text-slate-500 italic border-t border-slate-700/50 pt-4">
            本頁內容僅為資訊整理與風險提示，不構成法律意見（No legal advice）
          </p>
        </div>
      )}
    </div>
  );
}
