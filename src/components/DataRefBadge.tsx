import { DataRef } from '../data/slides';

interface DataRefBadgeProps {
  dataRef: DataRef;
}

export default function DataRefBadge({ dataRef }: DataRefBadgeProps) {
  return (
    <span className="data-ref" title={`${dataRef.source}${dataRef.page ? ` (P${dataRef.page})` : ''}`}>
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <span>{dataRef.id}</span>
      {dataRef.page && <span className="text-primary-400/70">P{dataRef.page}</span>}
    </span>
  );
}
