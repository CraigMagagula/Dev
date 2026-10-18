// src/components/FilterBar.tsx

import type { Stage } from "../types";

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
  search: string;
  onSearchChange: (value: string) => void;
  stage: Stage | "all";
  onStageChange: (value: Stage | "all") => void;
};

export function FilterBar({
  search,
  onSearchChange,
  stage,
  onStageChange,
}: Props) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <input
        type="search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search company or job title…"
        aria-label="Search applications"
        className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
      />
      <select
        value={stage}
        onChange={(e) => onStageChange(e.target.value as Stage | "all")}
        aria-label="Filter by stage"
        className="rounded-md border border-slate-300 px-3 py-2 text-sm"
      >
        <option value="all">All stages</option>
        {stageOrder.map((s) => (
          <option key={s} value={s}>
            {stageLabels[s]}
          </option>
        ))}
      </select>
    </div>
  );
}