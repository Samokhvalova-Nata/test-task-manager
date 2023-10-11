import { useDispatch } from "react-redux";
import { Button } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { deleteTask, toggleCompleted } from 'redux/tasksSlice';
import { useState } from "react";
import { EditModal } from "components/EditModal";

export const TaskItem = ({ id, title, description, completed }) => {
    const [isShowModal, setIsShowModal] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteTask(id));
    const handleToggle = () => dispatch(toggleCompleted(id));
    const toggleModal = () => setIsShowModal(prev => !prev);

    return (
        <>
        <Stack direction="horizontal" gap={4}>
            <Form.Check
                type="switch"
                id="status-switch"
                checked={completed }
                onChange={handleToggle}
            />
            <p>{title}</p>
            <p>{description}</p>
            <Button variant="info" onClick={toggleModal}>Змінити</Button>
            <div className="vr" />
            <Button variant="secondary" onClick={handleDelete}>Видалити</Button>
        </Stack>
        {isShowModal &&
                <EditModal
                    id={id}
                    title={title}
                    description={description}
                    completed={completed}
                    isOpen={isShowModal}
                    onClose={toggleModal}/>
        }
        </>
    );
};
