import { SlideContent } from '../../data/slides';
import SlideImage from '../SlideImage';

interface CoverSlideProps {
  slide: SlideContent;
  slideNumber: number;
  totalSlides: number;
}

export default function CoverSlide({ slide }: CoverSlideProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {slide.image && (
        <div className="absolute inset-0">
          <SlideImage
            query={slide.image.query}
            alt={slide.image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl animate-fade-in">
        {/* Decorative Element */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-primary-500" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          {slide.title}
        </h1>

        {/* Subtitle */}
        {slide.subtitle && (
          <h2 className="text-3xl md:text-5xl font-light text-primary-400 mb-8">
            {slide.subtitle}
          </h2>
        )}

        {/* Claim / Tagline */}
        {slide.claim && (
          <p className="text-xl md:text-2xl text-slate-300 font-light tracking-wide">
            {slide.claim}
          </p>
        )}

        {/* Decorative Element */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-purple-500/50" />
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-primary-500/50" />
        </div>
      </div>

      {/* Bottom Attribution */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-xs text-slate-500">
          Image: Unsplash
        </p>
      </div>
    </div>
  );
}
