import { SlideContent } from '../data/slides';
import CoverSlide from './slides/CoverSlide';
import TitleBulletsSlide from './slides/TitleBulletsSlide';
import TableSlide from './slides/TableSlide';
import ComparisonSlide from './slides/ComparisonSlide';
import RoadmapSlide from './slides/RoadmapSlide';
import KPISlide from './slides/KPISlide';
import CTASlide from './slides/CTASlide';

interface SlideRendererProps {
  slide: SlideContent;
  slideNumber: number;
  totalSlides: number;
}

export default function SlideRenderer({ slide, slideNumber, totalSlides }: SlideRendererProps) {
  const commonProps = {
    slide,
    slideNumber,
    totalSlides
  };

  switch (slide.layout) {
    case 'cover':
      return <CoverSlide {...commonProps} />;
    case 'title-bullets':
    case 'two-column':
      return <TitleBulletsSlide {...commonProps} />;
    case 'table':
      return <TableSlide {...commonProps} />;
    case 'comparison':
      return <ComparisonSlide {...commonProps} />;
    case 'roadmap':
      return <RoadmapSlide {...commonProps} />;
    case 'kpi':
      return <KPISlide {...commonProps} />;
    case 'cta':
      return <CTASlide {...commonProps} />;
    default:
      return <TitleBulletsSlide {...commonProps} />;
  }
}
