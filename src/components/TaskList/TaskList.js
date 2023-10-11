import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { TaskItem } from 'components/TaskItem';
import { NoTasks } from 'components/NoTasks';
import { selectVisibleTasks } from 'redux/selectors';


export const TaskList = () => {
  const visibleTasks = useSelector(selectVisibleTasks);

  return (
    <Container as="main">
      {visibleTasks.length > 0 ? (
        <ListGroup as="ul" className="mx-auto w-50">
          {visibleTasks.map(({ id, title, description, completed }) => (
            <TaskItem
              key={id}
              id={id}
              title={title}
              description={description}
              completed={completed}/>
          ))}
        </ListGroup>
      ) : (
        <NoTasks/>
      )}
    </Container>
  );
};