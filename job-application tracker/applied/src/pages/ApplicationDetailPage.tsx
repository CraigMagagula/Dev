// src/pages/ApplicationDetailPage.tsx

import { useParams, Link } from "react-router";
import { useApplications } from "../hooks/useApplications";

export function ApplicationDetailPage() {
  const { id } = useParams();
  const { applications, loading, error } = useApplications();

  if (loading) {
    return (
      <main className="mx-auto max-w-2xl p-6">
        <p className="text-sm text-slate-500">Loading…</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-2xl p-6">
        <p className="text-sm font-semibold text-rose-700">
          Something went wrong loading this application.
        </p>
        <p className="mt-2 text-xs text-slate-500">{error}</p>
      </main>
    );
  }

  const application = applications.find((a) => a.id === id);

  if (!application) {
    return (
      <main className="mx-auto max-w-2xl p-6">
        <h1 className="text-2xl font-bold">Application not found</h1>
        <p className="mt-2 text-sm text-slate-600">
          No application with id “{id}” exists.
        </p>
        <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">
          Back to all applications
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl p-6">
      <Link to="/" className="text-sm text-blue-600 hover:underline">
        ← Back to all applications
      </Link>
      <h1 className="mt-4 text-2xl font-bold">{application.company}</h1>
      <p className="text-slate-600">{application.role}</p>
      <p className="mt-2 text-xs text-slate-500">
        Sent {application.dateSent}
      </p>
    </main>
  );
}