// src/components/StageBadge.tsx

import type { Stage } from "../types";

const stageStyles: Record<Stage, string> = {
  wishlist: "bg-slate-100 text-slate-700 border-slate-300",
  applied: "bg-blue-100 text-blue-800 border-blue-300",
  interview: "bg-amber-100 text-amber-800 border-amber-300",
  offer: "bg-green-100 text-green-800 border-green-300",
  closed: "bg-rose-100 text-rose-800 border-rose-300",
};

const stageLabels: Record<Stage, string> = {
  wishlist: "Saved",
  applied: "Applied",
  interview: "Interview",
  offer: "Offer",
  closed: "Closed",
};

type Props = {
  stage: Stage;
};

export function StageBadge({ stage }: Props) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${stageStyles[stage]}`}
    >
      {stageLabels[stage]}
    </span>
  );
}