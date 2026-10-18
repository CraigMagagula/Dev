// src/pages/ApplicationsPage.tsx

import { seedApplications } from "../data/seed";
import { ApplicationList } from "../components/ApplicationList";

export function ApplicationsPage() {
  return (
    <>
      <h1 className="mb-4 text-xl font-semibold">All applications</h1>
      <ApplicationList applications={seedApplications} />
    </>
  );
}