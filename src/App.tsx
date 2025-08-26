import { createRouter } from "@tanstack/react-router"

import { rootRoute } from "./routes/root";

export const router = createRouter({
  routeTree: rootRoute,
})

// TypeScript helper (so hooks like useRouter work properly)
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
