import { createFileRoute } from "@tanstack/react-router";

function TaskDetail() {

    const { taskId } = Route.useParams();

    return (
        <div className="p-4 border rounded-lg mt-4">
            <h3 className="text-lg font-bold">📝 Task Details</h3>
            <p className="mt-2">
                Showing details for task <span className="font -mono">{taskId}</span>
            </p>
        </div>
    );
}

export const Route = createFileRoute("/tasks/$taskId/")({
    component: TaskDetail,
});

export default TaskDetail;
