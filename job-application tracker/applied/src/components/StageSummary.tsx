// src/components/StageSummary.tsx

import type { Application, Stage } from "../types";
import { countByStage } from "../lib/applications";

const stageLabels: Record<Stage, string> = {
  wishlist: "Saved",
  applied: "Applied",
  interview: "Interview",
  offer: "Offer",
  closed: "Closed",
};

const stageOrder: Stage[] = [
  "wishlist",
  "applied",
  "interview",
  "offer",
  "closed",
];

type Props = {
  applications: Application[];
};

export function StageSummary({ applications }: Props) {
  const counts = countByStage(applications);

  return (
    <div className="flex flex-wrap gap-2">
      {stageOrder.map((stage) => (
        <span
          key={stage}
          className="rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
        >
          {stageLabels[stage]}{" "}
          <span className="font-bold">{counts[stage]}</span>
        </span>
      ))}
    </div>
  );
}