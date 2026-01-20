import { useState } from 'react';
import { useSlideNavigation } from './hooks/useSlideNavigation';
import { slides, totalSlides } from './data/slides';
import SlideRenderer from './components/SlideRenderer';
import ProgressBar from './components/ProgressBar';
import Overview from './components/Overview';
import SpeakerNotes from './components/SpeakerNotes';
import KeyboardHint from './components/KeyboardHint';
import ExportButton from './components/ExportButton';
import PrintView from './components/PrintView';
import PdfExport from './components/PdfExport';

function App() {
  const [exportMode, setExportMode] = useState<'print' | 'pdf' | null>(null);
  const {
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide,
    isOverviewOpen,
    toggleOverview,
    closeOverview,
    showNotes,
    toggleNotes
  } = useSlideNavigation();

  const currentSlideData = slides[currentSlide - 1];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-900">
      {/* Main Slide */}
      <div className="w-full h-full">
        <SlideRenderer
          key={currentSlide}
          slide={currentSlideData}
          slideNumber={currentSlide}
          totalSlides={totalSlides}
        />
      </div>

      {/* Progress Bar */}
      <ProgressBar
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onSlideClick={goToSlide}
      />

      {/* Page Number */}
      <div className="page-number fixed bottom-4 right-4 text-sm text-slate-500 font-mono z-40">
        {currentSlide} / {totalSlides}
      </div>

      {/* Navigation Arrows (Mobile friendly) */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 1}
        className="fixed left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/50
                   hover:bg-slate-700/70 text-slate-400 hover:text-white transition-all
                   disabled:opacity-30 disabled:cursor-not-allowed z-40
                   md:opacity-0 md:hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        disabled={currentSlide === totalSlides}
        className="fixed right-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/50
                   hover:bg-slate-700/70 text-slate-400 hover:text-white transition-all
                   disabled:opacity-30 disabled:cursor-not-allowed z-40
                   md:opacity-0 md:hover:opacity-100"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Keyboard Hints */}
      <KeyboardHint onOverviewClick={toggleOverview} onNotesClick={toggleNotes} />

      {/* Overview Modal */}
      {isOverviewOpen && (
        <Overview
          slides={slides}
          currentSlide={currentSlide}
          onSlideSelect={goToSlide}
          onClose={closeOverview}
        />
      )}

      {/* Speaker Notes */}
      {showNotes && currentSlideData.notes && (
        <SpeakerNotes
          notes={currentSlideData.notes}
          onClose={toggleNotes}
        />
      )}

      {/* Export Button */}
      <ExportButton
        onExportPdf={() => setExportMode('pdf')}
        onPrint={() => setExportMode('print')}
      />

      {/* Print View */}
      {exportMode === 'print' && (
        <PrintView onClose={() => setExportMode(null)} />
      )}

      {exportMode === 'pdf' && (
        <PdfExport onClose={() => setExportMode(null)} />
      )}
    </div>
  );
}

export default App;
