import { SlideContent } from '../../data/slides';
import DataRefBadge from '../DataRefBadge';

interface TableSlideProps {
  slide: SlideContent;
  slideNumber: number;
  totalSlides: number;
}

export default function TableSlide({ slide }: TableSlideProps) {
  const themeColors = getThemeColors(slide.theme);

  return (
    <div className={`relative w-full h-full flex flex-col overflow-hidden ${themeColors.background}`}>
      {/* Header */}
      <div className="px-8 md:px-16 pt-12 pb-6 animate-slide-up">
        {slide.subtitle && (
          <p className={`text-sm uppercase tracking-wider mb-2 ${themeColors.subtitle}`}>
            {slide.subtitle}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          {slide.title}
        </h2>
        {slide.claim && (
          <p className={`mt-3 text-lg ${themeColors.claim} font-medium`}>
            {slide.claim}
          </p>
        )}
      </div>

      {/* Table */}
      {slide.table && (
        <div className="flex-1 px-8 md:px-16 pb-8 overflow-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
          <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50">
            <table className="w-full">
              <thead>
                <tr className={themeColors.tableHeader}>
                  {slide.table.headers.map((header, index) => (
                    <th
                      key={index}
                      className="px-6 py-4 text-left text-sm font-semibold text-white border-b border-slate-600"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {slide.table.rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`transition-colors ${rowIndex === slide.table!.rows.length - 1 ? themeColors.tableFooter : 'hover:bg-slate-700/30'}`}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`px-6 py-4 text-sm border-b border-slate-700/50 ${
                          cellIndex === 0 ? 'font-medium text-white' : 'text-slate-300'
                        } ${rowIndex === slide.table!.rows.length - 1 ? 'font-semibold' : ''}`}
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
          {slide.table.caption && (
            <p className="mt-4 text-xs text-slate-500 italic">
              {slide.table.caption}
            </p>
          )}
        </div>
      )}

      {/* Data References */}
      {slide.dataRefs && slide.dataRefs.length > 0 && (
        <div className="px-8 md:px-16 pb-8 flex flex-wrap gap-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
          {slide.dataRefs.map((ref) => (
            <DataRefBadge key={ref.id} dataRef={ref} />
          ))}
        </div>
      )}
    </div>
  );
}

function getThemeColors(theme?: 'bangkok' | 'okinawa' | 'neutral') {
  switch (theme) {
    case 'bangkok':
      return {
        background: 'bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950/30',
        subtitle: 'text-bangkok-gold',
        claim: 'text-bangkok-orange',
        tableHeader: 'bg-orange-900/30',
        tableFooter: 'bg-orange-900/20'
      };
    case 'okinawa':
      return {
        background: 'bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30',
        subtitle: 'text-okinawa-ocean',
        claim: 'text-okinawa-coral',
        tableHeader: 'bg-cyan-900/30',
        tableFooter: 'bg-cyan-900/20'
      };
    default:
      return {
        background: 'bg-gradient-to-br from-slate-900 via-slate-900 to-primary-950/20',
        subtitle: 'text-primary-400',
        claim: 'text-primary-300',
        tableHeader: 'bg-primary-900/30',
        tableFooter: 'bg-primary-900/20'
      };
  }
}
