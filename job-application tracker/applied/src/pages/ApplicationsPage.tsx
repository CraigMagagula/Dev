// src/pages/ApplicationsPage.tsx

import { useState } from "react";
import { useApplications } from "../hooks/useApplications";
import { ApplicationList } from "../components/ApplicationList";
import { StageSummary } from "../components/StageSummary";
import { FilterBar } from "../components/FilterBar";

export function ApplicationsPage() {
  const { applications, loading, error } = useApplications();
  const [search, setSearch] = useState("");
  const [stage, setStage] = useState<Parameters<typeof FilterBar>[0]["stage"]>("all");
  const filtered = applications.filter((application) => {
    const matchesSearch = JSON.stringify(application)
      .toLowerCase()
      .includes(search.trim().toLowerCase());
    const applicationStage = (application as { stage?: string }).stage;
    const matchesStage = stage === "all" || applicationStage === stage;

    return matchesSearch && matchesStage;
  });

  if (loading) {
    return (
      <main className="mx-auto max-w-2xl p-6 dark:text-slate-100">
        <h1 className="mb-6 text-2xl font-bold">Applied</h1>
        <p className="text-sm text-slate-500">Loading…</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-2xl p-6 dark:text-slate-100">
        <h1 className="mb-6 text-2xl font-bold">Applied</h1>
        <p className="text-sm font-semibold text-rose-700">
          Something went wrong loading your applications.
        </p>
        <p className="mt-2 text-xs text-slate-500">{error}</p>
      </main>
    );
  }

  return (
    
  <main className="mx-auto max-w-2xl p-6 dark:text-slate-100">
    <h1 className="mb-6 text-2xl font-bold dark:text-slate-100">Applied</h1>
    <StageSummary applications={applications} />
    <div className="mt-4">
      <FilterBar
        search={search}
        onSearchChange={setSearch}
        stage={stage}
        onStageChange={setStage}
      />
    </div>
    <div className="mt-6 dark:text-slate-100 dark:text-slate-100">
      {applications.length === 0 ? (
        <p>You haven't added anything yet.</p>
      ) : filtered.length === 0 ? (
        <p>
          No jobs match.{" "}
          <button onClick={() => { setSearch(""); setStage("all"); }}>
            Clear filters
          </button>
        </p>
      ) : (
        <ApplicationList applications={filtered} />
      )}
    </div>
  </main>
);
  
}