import { useEffect, useRef } from 'react';
import { slides, totalSlides } from '../data/slides';
import SlideRenderer from './SlideRenderer';

interface PdfExportProps {
  onClose: () => void;
}

export default function PdfExport({ onClose }: PdfExportProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const html2pdf = window.html2pdf;
    if (!html2pdf) {
      onClose();
      return;
    }

    const timer = window.setTimeout(() => {
      void (async () => {
        try {
          // 可選：等字型載入完再輸出，避免字型 fallback 造成版面跳動
          // await document.fonts?.ready;

          const { scrollHeight, scrollWidth } = element;

          await html2pdf()
            .from(element)
            .set({
              filename: 'slides.pdf',
              margin: 0,
              html2canvas: {
                scale: 2,
                useCORS: true,
                backgroundColor: null,
                windowWidth: scrollWidth,
                windowHeight: scrollHeight
              },
              pagebreak: {
                mode: ['css', 'legacy'],
                // 盡量避免 slide 內容被切到兩頁
                avoid: '.slide-page',
                // 每張 slide 後換頁，但排除最後一張，避免空白頁
                after: '.slide-page:not(:last-child)'
              },
              jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'landscape'
              }
            })
            .save();
        } finally {
          onClose();
        }
      })();
    }, 300);

    return () => {
      window.clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="pdf-export fixed inset-0 z-[100] bg-slate-900 overflow-auto">
      <div
        className="fixed top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white
                   px-6 py-3 rounded-lg shadow-lg z-[101] animate-fade-in"
      >
        <p className="text-sm font-medium">PDF 匯出中，請稍候...</p>
      </div>

      <button
        onClick={onClose}
        className="fixed top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700
                   text-white rounded-lg z-[101]"
        aria-label="關閉 PDF 匯出"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div ref={containerRef}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="slide-page">
            <SlideRenderer slide={slide} slideNumber={index + 1} totalSlides={totalSlides} />
          </div>
        ))}
      </div>
    </div>
  );
}
