// src/components/ApplicationCard.tsx

import { Link } from "react-router";
import type { Application } from "../types";
import { StageBadge } from "./StageBadge";
import { daySince, needsNudge } from "../lib/applications"; // Fixed 's'

type Props = {
  application: Application;
};

export function ApplicationCard({ application }: Props) {
  const days = daySince(application.dateSent); // Fixed 's'
  const nudge = needsNudge(application);

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"> {/* Fixed dark mode */}
            <Link
              to={`/applications/${application.id}`}
              className="hover:underline"
            >
              {application.company}
            </Link>
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400"> {/* Fixed dark mode */}
            {application.role}
          </p>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-500"> {/* Added dark mode */}
            Sent {application.dateSent} · {days} {days === 1 ? "day" : "days"} ago
          </p>
          {nudge && (
            <p className="mt-2 inline-block rounded-md bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800 dark:bg-amber-900/30 dark:text-amber-500">
              Needs a nudge
            </p>
          )}
        </div>
        <StageBadge stage={application.stage} />
      </div>
    </article>
  );
}