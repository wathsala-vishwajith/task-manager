import * as React from "react";
import {Outlet, Link, createRootRoute} from "@tanstack/react-router";

import {Switch} from '@/components/ui/switch';
import {useTheme} from '@/lib/theme/ThemeProvider';

export const rootRoute = createRootRoute({
  component: () => {
    const {theme, toggleTheme} = useTheme();

    return (
      <div className="h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <header className="p-4 shadow-md bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Task Manager
          </Link>
          <div className="flex items-center space-x-4">
            <span>{theme === 'dark' ? 'Dark' : 'Light'} Mode</span>
            <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
          </div>
        </header>
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    );
  },
});


