import { useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from 'react-hot-toast';
import { ImBin, ImPencil } from 'react-icons/im';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import { deleteTask, toggleCompleted } from 'redux/tasksSlice';
import { EditModal } from "components/EditModal";


export const TaskItem = ({ id, title, description, completed }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(id));
    toast.success(`Завдання ${title} видалено`);  
  };

  const handleToggle = () => dispatch(toggleCompleted(id));
  const toggleModal = () => setIsShowModal(prev => !prev);

  return (
      <>
        <Card
          as="li" 
          style={{ width: '40rem' }}
          border="secondary"
          className="my-2">
          <Card.Header as="h5">{title}</Card.Header>
          <Card.Body>
            <Stack direction="horizontal">
              <Card.Text className="m-0">{description}</Card.Text>
              <Form.Check
                className="p-2 ms-auto"
                type="switch"
                id="status-switch"
                checked={completed}
                onChange={handleToggle}/>
            </Stack>
          </Card.Body>
          <Card.Footer>
            <Stack direction="horizontal" gap={2} className="ms-auto">
              <Button
                size="sm"
                onClick={toggleModal}
                style={{ width: '2rem', height: '2rem' }}
                className="d-flex justify-content-center align-items-center">
                <ImPencil size={16}/>
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={handleDelete}
                style={{ width: '2rem', height: '2rem' }}
                className="d-flex justify-content-center align-items-center">
                <ImBin size={16}/>
              </Button>
            </Stack>
          </Card.Footer>
        </Card>

        {isShowModal && (
          <EditModal
            id={id}
            title={title}
            description={description}
            completed={completed}
            isOpen={isShowModal}
            onClose={toggleModal}/>
        )}
      </>
    );
};