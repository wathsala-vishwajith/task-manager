// src/routes/settings/index.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute()({
    component: SettingsPage,
});

export function SettingsPage() {
    return (
        <div className="space-y-3">
            <h2 className="text-xl font-semibold">⚙️ Settings</h2>
            <p className="text-muted-foreground">
                This app is built with React, TanStack Router, React Query, Zustand,
                Tailwind, and shadcn/ui.
            </p>
        </div>
    );
};

