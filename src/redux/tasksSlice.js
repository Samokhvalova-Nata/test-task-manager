import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    taskList: [
        { id: 0, title: 'Task1', description: 'Learn HTML and CSS', completed: true },
        { id: 1, title: 'Task2', description: 'Get good at JavaScript', completed: true },
        { id: 2, title: 'Task3', description: 'Master React', completed: false },
        { id: 3, title: 'Task4', description: 'Discover Redux', completed: false },
        { id: 4, title: 'Task5', description: 'Build amazing apps', completed: false }
    ],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: {
            reducer(state, { payload }) {
                state.taskList.push(payload);
            },
            prepare(title, description) {
                return {
                    payload: {
                        title,
                        description,
                        id: nanoid(),
                        completed: false,
                    },
                };
            },
        },
        deleteTask(state, { payload }) {
            const index = state.taskList.findIndex(task => task.id === payload);
            state.taskList.splice(index, 1);
        },
        editTask(state, { payload }) {
            const index = state.taskList.findIndex(task => task.id === payload.id);
            state.taskList.splice(index, 1, payload);
        },
        toggleCompleted(state, { payload }) {
            for (const task of state.taskList) {
                if (task.id === payload) {
                task.completed = !task.completed;
                break;
                }
            }
        },
    },
});

export const { addTask, deleteTask, editTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;