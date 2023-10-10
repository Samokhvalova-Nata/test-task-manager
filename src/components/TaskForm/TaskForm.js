import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export const TaskForm = () => {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container>
            <Button variant="primary" onClick={handleShow}>
                Додати завдання
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Нове завдання</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Назва</Form.Label>
                            <Form.Control required type="text" autoFocus />
                            <Form.Control.Feedback type="invalid">
                                Будь ласка введіть назву завдання.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Опис</Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                        <Button type="submit" >
                        Зберігти
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};
