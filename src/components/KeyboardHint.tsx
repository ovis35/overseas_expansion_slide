interface KeyboardHintProps {
  onOverviewClick: () => void;
  onNotesClick: () => void;
}

export default function KeyboardHint({ onOverviewClick, onNotesClick }: KeyboardHintProps) {
  return (
    <div className="keyboard-hint hidden md:flex">
      <button
        onClick={onOverviewClick}
        className="key-badge hover:bg-slate-700 hover:border-primary-500 transition-colors cursor-pointer"
        title="開啟總覽"
      >
        O
      </button>
      <button
        onClick={onNotesClick}
        className="key-badge hover:bg-slate-700 hover:border-primary-500 transition-colors cursor-pointer"
        title="切換講者筆記"
      >
        N
      </button>
      <span className="key-badge">← →</span>
      <span className="text-slate-600">切頁</span>
    </div>
  );
}
