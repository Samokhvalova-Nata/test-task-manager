## Web application for managing a task list with the ability to add, edit, delete, and mark tasks as completed

Click link: [TaskManager](https://samokhvalova-nata.github.io/test-task-manager/)

### Main page

- "/" - the main displays a task list.

![Main page](/assets/main.jpg)

## Functionality

### Complete task status

Clicking the checkbox marks the task as completed or unmarks it.

![Status](/assets/status.jpg)

### Add new task

Clicking the button "Додати завдання" opens a modal window to create a new task.

Added validation for the field "Назва" (the field cannot be empty).

![Add task](/assets/add-task.jpg)

### Filter for tasks by status

Filtering tasks by status (completed/incomplete) is implemented using a select (dropdown) menu.

![Filter](/assets/filter.jpg)

### Edit and delete task

Clicking the button with the "Edit" icon opens a modal window for editing the task.

![Edit](/assets/edit.jpg)

Clicking the button with the "Delete" icon removes the task.

### No tasks

If the task list is empty, a message is displayed to the user.

![Empty](/assets/no-tasks.jpg)


## For start use command:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.