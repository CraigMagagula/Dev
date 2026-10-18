// src/api/applications.ts

import type { Application } from "../types";
import { seedApplications } from "../data/seed";

const STORAGE_KEY = "applied:applications";
const DELAY_MS = 300;

// The shape the add form will send. No id, no createdAt — those are
// generated here, so callers can't accidentally set them.
export type NewApplication = Omit<Application, "id" | "createdAt">;

// --- internal helpers -------------------------------------------------------

function delay<T>(value: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), DELAY_MS));
}

function readAll(): Application[] {
  const raw = localStorage.getItem(STORAGE_KEY);

  // First visit: nothing stored yet. Seed it so a new visitor
  // sees something, and so the nudge rule has data to work with.
  if (raw === null) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedApplications));
    return seedApplications;
  }

  return JSON.parse(raw) as Application[];
}

function writeAll(applications: Application[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
}

// --- the four public functions ----------------------------------------------

export async function fetchApplications(): Promise<Application[]> {
  return delay(readAll());
}

export async function createApplication(
  input: NewApplication,
): Promise<Application> {
  const application: Application = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  const all = readAll();
  writeAll([application, ...all]);

  return delay(application);
}

export async function updateApplication(
  id: string,
  changes: Partial<Application>,
): Promise<Application> {
  const all = readAll();
  const index = all.findIndex((a) => a.id === id);

  if (index === -1) {
    throw new Error(`No application with id "${id}"`);
  }

  const updated: Application = { ...all[index], ...changes };
  const next = [...all];
  next[index] = updated;
  writeAll(next);

  return delay(updated);
}

export async function deleteApplication(id: string): Promise<void> {
  const all = readAll();
  const next = all.filter((a) => a.id !== id);

  if (next.length === all.length) {
    throw new Error(`No application with id "${id}"`);
  }

  writeAll(next);

  return delay(undefined);
}