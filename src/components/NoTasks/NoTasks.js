import Card from 'react-bootstrap/Card';

export const NoTasks = () => {
    return (
        <Card
            as="div"
            style={{ width: '40rem' }}
            border="primary"
            className="my-4 mx-auto p-4 
            d-flex justify-content-center align-items-center">
            <Card.Title>В тебе ще немає завдань.</Card.Title>
            <Card.Text>Щоб почати, натисни кнопку "Додати завдання"</Card.Text>
        </Card>
    );
};