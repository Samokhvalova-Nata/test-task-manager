import { TaskItem } from "components/TaskItem";
import { useSelector } from "react-redux";
import { selectVisibleTasks } from 'redux/selectors';

export const TaskList = () => {
    const visibleTasks = useSelector(selectVisibleTasks);

    return (
        <ul>
            {visibleTasks.map(({ id, title, description, completed}) => (
                <li key={id}>
                    <TaskItem
                        id={id}
                        title={title}
                        description={description}
                        completed={completed}
                    />
                </li>
            ))}
        </ul>
    )
};