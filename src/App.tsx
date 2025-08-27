import { createRouter } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"

export const router = createRouter({
  routeTree: routeTree,
})

// TypeScript helper (so hooks like useRouter work properly)
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
