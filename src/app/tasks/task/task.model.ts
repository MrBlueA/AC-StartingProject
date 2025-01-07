// Interface representing the structure of a Task
export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

// Interface representing the data structure of a Task, without the user id nor the task id
export interface NewTaskData {
  title: string;
  summary: string;
  dueDate: string;
}
