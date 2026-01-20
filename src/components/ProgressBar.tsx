interface ProgressBarProps {
  currentSlide: number;
  totalSlides: number;
  onSlideClick: (index: number) => void;
}

export default function ProgressBar({ currentSlide, totalSlides, onSlideClick }: ProgressBarProps) {
  return (
    <div className="progress-bar">
      {Array.from({ length: totalSlides }, (_, i) => i + 1).map((slideNum) => (
        <button
          key={slideNum}
          onClick={() => onSlideClick(slideNum)}
          className={`progress-dot ${slideNum === currentSlide ? 'active' : ''}`}
          aria-label={`Go to slide ${slideNum}`}
          title={`Slide ${slideNum}`}
        />
      ))}
    </div>
  );
}
