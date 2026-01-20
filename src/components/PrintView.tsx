import { useEffect } from 'react';
import { slides, totalSlides } from '../data/slides';
import SlideRenderer from './SlideRenderer';

interface PrintViewProps {
  onClose: () => void;
}

export default function PrintView({ onClose }: PrintViewProps) {
  useEffect(() => {
    // 顯示提示訊息
    const timer = setTimeout(() => {
      window.print();
    }, 500);

    // 監聽列印完成事件
    const handleAfterPrint = () => {
      onClose();
    };

    window.addEventListener('afterprint', handleAfterPrint);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, [onClose]);

  return (
    <div className="print-view fixed inset-0 z-[100] bg-slate-900 overflow-auto">
      {/* 提示訊息（列印時會隱藏） */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white
                      px-6 py-3 rounded-lg shadow-lg z-[101] print:hidden animate-fade-in">
        <p className="text-sm font-medium">
          請在列印對話框中選擇「另存為 PDF」，並勾選「背景圖形」選項
        </p>
      </div>

      {/* 關閉按鈕（列印時會隱藏） */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700
                   text-white rounded-lg z-[101] print:hidden"
        aria-label="關閉列印預覽"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* 所有投影片 */}
      {slides.map((slide, index) => (
        <div key={slide.id} className="slide-page">
          <SlideRenderer
            slide={slide}
            slideNumber={index + 1}
            totalSlides={totalSlides}
          />
        </div>
      ))}
    </div>
  );
}
