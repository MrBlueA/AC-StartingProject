import {DUMMY_TASKS} from "../dummy-tasks";
import {NewTaskData, Task} from "./task/task.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class TaskService {
  private taskList = DUMMY_TASKS;

  constructor() {
    const localTaskList = localStorage.getItem('taskList');

    if (localTaskList) {
      this.taskList = JSON.parse(localTaskList);
    }
  }

  getUserTasks(userid: string) {
    return this.taskList.filter((task) => task.userId === userid);
  }

  createTask(taskData: NewTaskData, userid: string) {
    const newTask: Task = {
      id: new Date().getTime().toString(),
      userId: userid,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    }
    this.taskList.push(newTask);
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.taskList = this.taskList.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

}
