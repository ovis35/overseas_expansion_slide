import { SlideContent } from '../data/slides';

interface OverviewProps {
  slides: SlideContent[];
  currentSlide: number;
  onSlideSelect: (index: number) => void;
  onClose: () => void;
}

export default function Overview({ slides, currentSlide, onSlideSelect, onClose }: OverviewProps) {
  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-slate-700">
        <h2 className="text-lg font-semibold text-white">簡報總覽</h2>
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Grid */}
      <div
        className="overview-grid"
        onClick={(e) => e.stopPropagation()}
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => onSlideSelect(index + 1)}
            className={`overview-item group ${index + 1 === currentSlide ? 'current' : ''}`}
          >
            {/* Slide Preview */}
            <div className="w-full h-full p-4 flex flex-col justify-between">
              {/* Slide Number */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {getThemeIndicator(slide.theme)}
              </div>

              {/* Slide Title */}
              <div>
                <h3 className="text-sm font-medium text-white line-clamp-2 group-hover:text-primary-400 transition-colors">
                  {slide.title}
                </h3>
                {slide.subtitle && (
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                    {slide.subtitle}
                  </p>
                )}
              </div>

              {/* Layout Indicator */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-600 capitalize">
                  {slide.layout}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Keyboard hint */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-xs text-slate-500">
        按 <kbd className="key-badge">Esc</kbd> 或 <kbd className="key-badge">O</kbd> 關閉
      </div>
    </div>
  );
}

function getThemeIndicator(theme?: 'bangkok' | 'okinawa' | 'neutral') {
  switch (theme) {
    case 'bangkok':
      return (
        <span className="flex items-center gap-1 text-xs text-bangkok-orange">
          <span className="w-2 h-2 rounded-full bg-bangkok-orange" />
          BKK
        </span>
      );
    case 'okinawa':
      return (
        <span className="flex items-center gap-1 text-xs text-okinawa-ocean">
          <span className="w-2 h-2 rounded-full bg-okinawa-ocean" />
          OKA
        </span>
      );
    default:
      return null;
  }
}
