// src/pages/NotFoundPage.tsx

import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-sm text-slate-600">
        That address does not match anything in this app.
      </p>
      <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">
        Back to all applications
      </Link>
    </main>
  );
}