// src/components/Layout.tsx

import { Link, Outlet } from "react-router";

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-2xl items-center justify-between p-4">
          <Link to="/" className="text-lg font-bold">
            Applied
          </Link>
          <Link
            to="/new"
            className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            + Add application
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-2xl p-6">
        <Outlet />
      </main>
    </div>
  );
}