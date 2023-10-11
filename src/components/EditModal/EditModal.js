import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { editTask, toggleCompleted } from 'redux/tasksSlice';


export const EditModal = ({ id, title, description, completed, isOpen, onClose }) => {
    const [taskTitle, setTaskTitle] = useState(title);
    const [taskDescription, setTaskDescription] = useState(description);
    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch();

    const handleToggle = () => dispatch(toggleCompleted(id));

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);
        if (validated) {
          dispatch(editTask({ id, title: taskTitle, description: taskDescription, completed }));
          toast.success(`Завдання ${taskTitle} змінено`);  
          onClose();
        }
    };

    return (
      <Modal show={isOpen} onHide={onClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Змінити завдання</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="status">
              <Form.Check
                type="switch"
                id="status-switch"
                label="Виконано"
                checked={completed}
                onChange={handleToggle}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Назва</Form.Label>
              <Form.Control
                required
                type="text"
                autoFocus
                name="title"
                value={taskTitle}
                onChange={e => setTaskTitle(e.target.value)}/>
              <Form.Control.Feedback type="invalid">
                Будь ласка введіть назву завдання
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Опис</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="description"
                value={taskDescription}
                onChange={e => setTaskDescription(e.target.value)}/>
            </Form.Group>

            <Stack direction="horizontal" gap={2}>
              <Button type="submit">Зберігти</Button>
              <Button type="button" variant="secondary" onClick={onClose}>
                Скасувати
              </Button>
            </Stack>
          </Form>
        </Modal.Body>
      </Modal>
    );
};