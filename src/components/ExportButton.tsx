interface ExportButtonProps {
  onExport: () => void;
}

export default function ExportButton({ onExport }: ExportButtonProps) {
  return (
    <button
      onClick={onExport}
      className="export-button fixed bottom-4 left-4 flex items-center gap-2 px-4 py-2
                 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white
                 rounded-lg border border-slate-700 hover:border-primary-500
                 transition-all duration-200 text-sm z-40"
      title="匯出為 PDF（將開啟列印對話框，請選擇「另存為 PDF」）"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <span className="hidden sm:inline">匯出 PDF</span>
    </button>
  );
}
