import { useState } from 'react';

interface ExportButtonProps {
  onExportPdf: () => void;
  onPrint: () => void;
}

export default function ExportButton({ onExportPdf, onPrint }: ExportButtonProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSelect = (action: () => void) => {
    setIsMenuOpen(false);
    action();
  };

  return (
    <div className="export-button fixed bottom-4 left-4 z-40">
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="flex items-center gap-2 px-4 py-2
                   bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white
                   rounded-lg border border-slate-700 hover:border-primary-500
                   transition-all duration-200 text-sm"
        title="匯出模式"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span className="hidden sm:inline">匯出</span>
      </button>

      {isMenuOpen && (
        <div className="mt-2 w-40 rounded-lg border border-slate-700 bg-slate-800/95
                        shadow-lg backdrop-blur text-sm overflow-hidden">
          <button
            onClick={() => handleSelect(onPrint)}
            className="w-full px-4 py-2 text-left text-slate-200 hover:bg-slate-700/80"
          >
            列印
          </button>
          <button
            onClick={() => handleSelect(onExportPdf)}
            className="w-full px-4 py-2 text-left text-slate-200 hover:bg-slate-700/80"
          >
            PDF 匯出
          </button>
        </div>
      )}
    </div>
  );
}
