import { useState, useEffect, useCallback } from "react";
import type { Application } from "../types";
import {
  fetchApplications,
  createApplication,
  updateApplication,
  deleteApplication,
  type NewApplication,
} from "../api/applications";

export function useApplications(): {
  applications: Application[];
  loading: boolean;
  error: string | null;
  add: (input: NewApplication) => Promise<void>;
  update: (id: string, changes: Partial<Application>) => Promise<void>;
  remove: (id: string) => Promise<void>;
  reload: (showLoading?: boolean) => Promise<void>;
} {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const reload = useCallback(async (showLoading = false) => {
  if (showLoading) setLoading(true);

  try {
    const result = await fetchApplications();
    setApplications(result);
    setError(null);          // ← clear the error only on success
  } catch (cause) {
    setError(cause instanceof Error ? cause.message : String(cause));
  } finally {
    setLoading(false);
  }
}, []);

  useEffect(() => {
    queueMicrotask(() => void reload());
  }, [reload]);

  const add = async (input: NewApplication) => {
    await createApplication(input);
    await reload();
  };

  const update = async (id: string, changes: Partial<Application>) => {
    await updateApplication(id, changes);
    await reload();
  };

  const remove = async (id: string) => {
    await deleteApplication(id);
    await reload();
  };

  return { applications, loading, error, add, update, remove, reload };
}