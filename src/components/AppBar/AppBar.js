import Stack from 'react-bootstrap/Stack';
import { StatusFilter } from "components/StatusFilter";
import { TaskForm } from "components/TaskForm";

export const AppBar = () => {
    return (
        <Stack as="header"
            direction="horizontal"
            className="col-md-4 mx-auto m-3">
            <TaskForm />
            <StatusFilter />
        </Stack>
    );
};