import { SlideContent } from '../../data/slides';

interface KPISlideProps {
  slide: SlideContent;
  slideNumber: number;
  totalSlides: number;
}

export default function KPISlide({ slide }: KPISlideProps) {
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

      {/* KPI Table */}
      {slide.kpiTable && (
        <div className="flex-1 px-8 md:px-16 pb-8 overflow-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
          <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50">
            <table className="w-full">
              <thead>
                <tr>
                  {slide.kpiTable.headers.map((header, index) => (
                    <th
                      key={index}
                      className={`px-6 py-4 text-left text-sm font-semibold border-b border-slate-600 ${
                        index === 0
                          ? 'bg-slate-800/80 text-slate-300 w-1/5'
                          : index === 1
                          ? 'bg-bangkok-orange/10 text-bangkok-orange'
                          : 'bg-okinawa-ocean/10 text-okinawa-ocean'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {index === 1 && <span>🇹🇭</span>}
                        {index === 2 && <span>🇯🇵</span>}
                        {header}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {slide.kpiTable.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-slate-700/30 transition-colors">
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`px-6 py-4 text-sm border-b border-slate-700/50 ${
                          cellIndex === 0
                            ? 'font-medium bg-slate-800/30'
                            : 'text-slate-200'
                        }`}
                      >
                        {cellIndex === 0 ? (
                          <div className="flex items-center gap-2">
                            {rowIndex === 0 && <span className="text-green-400">📈</span>}
                            {rowIndex === 1 && <span className="text-blue-400">📊</span>}
                            {rowIndex === 2 && <span className="text-yellow-400">⚠️</span>}
                            <span className={
                              rowIndex === 0 ? 'text-green-400' :
                              rowIndex === 1 ? 'text-blue-400' :
                              'text-yellow-400'
                            }>{cell}</span>
                          </div>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Caption */}
          {slide.kpiTable.caption && (
            <p className="mt-4 text-xs text-slate-500 italic">
              {slide.kpiTable.caption}
            </p>
          )}

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-400/20 border border-green-400/50" />
              <span>Leading：用於預測與早期預警</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-400/20 border border-blue-400/50" />
              <span>Lagging：用於驗證與績效評估</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-400/20 border border-yellow-400/50" />
              <span>風險監測：外部環境變化追蹤</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
