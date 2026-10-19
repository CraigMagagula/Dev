// src/components/ThemeToggle.tsx

import { useTheme } from "../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 dark:text-slate-100"
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}