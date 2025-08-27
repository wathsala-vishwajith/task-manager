import { createFileRoute, Outlet, Link, useRouterState } from "@tanstack/react-router";

export function Tasks() {
  const routerState = useRouterState();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Tasks</h1>
      <p>This is the tasks page.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go to Dashboard
      </Link>

      <h2>Tasks</h2>
      <p className="text-sm text-gray-500 mb-2">
        Current Task: {routerState.location.pathname}
      </p>
      <ul className="mt-4 space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow"
          >
            <Link
              to="/tasks/$taskId"
                params={{ taskId: task.id }}
              className="text-lg font-medium text-blue-600 hover:underline"
            >
              {task.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export const Route = createFileRoute("/tasks/")({
  component: Tasks,
});

// Sample static tasks
const tasks = [
  { id: "1", title: "Set up project" },
  { id: "2", title: "Build first feature" },
];
