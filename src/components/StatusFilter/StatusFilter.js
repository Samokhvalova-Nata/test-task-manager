import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { setStatusFilter } from 'redux/filterSlice';


export const StatusFilter = () => {
    const dispatch = useDispatch();

    const handleFilterChange = filter => dispatch(setStatusFilter(filter));

    return (
      <Form.Select className="ms-auto w-25"
          aria-label="Complete status"
          onChange={e => handleFilterChange(e.target.value)}>
        <option value="all">Всі</option>
        <option value="active">Активні</option>
        <option value="completed">Виконані</option>
      </Form.Select>
    );
};