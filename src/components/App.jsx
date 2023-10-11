import Container from 'react-bootstrap/Container';
import { AppBar } from './AppBar';
import { TaskList } from "./TaskList";

export const App = () => {

  return (
    <Container>
      <AppBar/>
      <TaskList/>
    </Container>
  );
};
