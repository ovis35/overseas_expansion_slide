import { SlideContent } from '../../data/slides';
import SlideImage from '../SlideImage';
import DataRefBadge from '../DataRefBadge';

interface TitleBulletsSlideProps {
  slide: SlideContent;
  slideNumber: number;
  totalSlides: number;
}

export default function TitleBulletsSlide({ slide }: TitleBulletsSlideProps) {
  const hasImage = slide.image && slide.image.position !== 'background';
  const themeColors = getThemeColors(slide.theme);

  return (
    <div className="relative w-full h-full flex overflow-hidden">
      {/* Background gradient based on theme */}
      <div className={`absolute inset-0 ${themeColors.background}`} />

      {/* Content Area */}
      <div className={`relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 py-12 ${hasImage ? 'md:w-3/5' : 'max-w-5xl mx-auto'}`}>
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          {slide.subtitle && (
            <p className={`text-sm uppercase tracking-wider mb-2 ${themeColors.subtitle}`}>
              {slide.subtitle}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {slide.title}
          </h2>
          {slide.claim && (
            <p className={`mt-4 text-lg md:text-xl ${themeColors.claim} font-medium`}>
              {slide.claim}
            </p>
          )}
        </div>

        {/* Bullets */}
        {slide.bullets && (
          <ul className="space-y-4 animate-slide-up" style={{ animationDelay: '100ms' }}>
            {slide.bullets.map((bullet, index) => (
              <li
                key={index}
                className={`flex items-start gap-3 ${bullet.highlight ? 'bg-white/5 rounded-lg p-3 -ml-3' : ''}`}
              >
                <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${bullet.highlight ? themeColors.bulletHighlight : themeColors.bullet}`} />
                <div className="flex-1">
                  <span className={`text-base md:text-lg ${bullet.highlight ? 'text-white font-medium' : 'text-slate-300'}`}>
                    {bullet.text}
                  </span>
                  {bullet.subBullets && (
                    <ul className="mt-2 ml-4 space-y-1">
                      {bullet.subBullets.map((subBullet, subIndex) => (
                        <li key={subIndex} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-500 flex-shrink-0" />
                          {subBullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Data References */}
        {slide.dataRefs && slide.dataRefs.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
            {slide.dataRefs.map((ref) => (
              <DataRefBadge key={ref.id} dataRef={ref} />
            ))}
          </div>
        )}

        {/* Legal Disclaimer */}
        {slide.legalDisclaimer && (
          <p className="legal-disclaimer">
            本頁內容僅為資訊整理與風險提示，不構成法律意見（No legal advice）
          </p>
        )}
      </div>

      {/* Image Area */}
      {hasImage && slide.image && (
        <div className="hidden md:block md:w-2/5 relative">
          <SlideImage
            query={slide.image.query}
            alt={slide.image.alt}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${themeColors.imageOverlay}`} />
          <p className="absolute bottom-4 right-4 text-xs text-white/50">
            Image: Unsplash
          </p>
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
        bullet: 'bg-slate-500',
        bulletHighlight: 'bg-bangkok-orange',
        imageOverlay: 'bg-gradient-to-l from-transparent via-slate-900/50 to-slate-900'
      };
    case 'okinawa':
      return {
        background: 'bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30',
        subtitle: 'text-okinawa-ocean',
        claim: 'text-okinawa-coral',
        bullet: 'bg-slate-500',
        bulletHighlight: 'bg-okinawa-ocean',
        imageOverlay: 'bg-gradient-to-l from-transparent via-slate-900/50 to-slate-900'
      };
    default:
      return {
        background: 'bg-gradient-to-br from-slate-900 via-slate-900 to-primary-950/20',
        subtitle: 'text-primary-400',
        claim: 'text-primary-300',
        bullet: 'bg-slate-500',
        bulletHighlight: 'bg-primary-500',
        imageOverlay: 'bg-gradient-to-l from-transparent via-slate-900/50 to-slate-900'
      };
  }
}
