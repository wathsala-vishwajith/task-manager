import { createFileRoute, Link } from "@tanstack/react-router";

function Dashboard() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <p>Welcome to the Task Manager Dashboard!</p>
            <Link to="/tasks" className="text-blue-500 hover:underline">
                View Tasks
            </Link>
        </div>
    );
}


export const Route = createFileRoute("/")({
    component: Dashboard,
});

export default Dashboard;
