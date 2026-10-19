// src/components/Layout.tsx

import { NavLink, Outlet } from "react-router";

import { ThemeToggle } from "./ThemeToggle";


export function Layout() {
   return (
     <div className="min-h-screen bg-slate-50 text-slate-900 dark:border-slate-800 dark:bg-slate-900">
       <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
         <div className="mx-auto flex max-w-2xl items-center justify-between p-6 dark:text-slate-100">
           <NavLink to="/" className="text-xl font-bold dark:text-slate-100">
             Applied
           </NavLink>
            <ThemeToggle />
             <NavLink
               to="/new"
               className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 dark:text-slate-100"
             >
               + Add application
             </NavLink>
           
         </div>
       </header>
       <Outlet />
     </div>
   );
}