import { StatusFilter } from "components/StatusFilter";
import { TaskForm } from "components/TaskForm";

export const AppBar = () => {
    return (
        <header >
            <TaskForm/>
            <h2 >Filter by status</h2>
            <StatusFilter />
        </header>
    );
};
