import {Component, inject, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TaskService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) currentUserName!: string;
  private tasksService = inject(TaskService);
  isCreatingTask = false;

  get selectedUserTaskList() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCreateTaskButtonClicked() {
    this.isCreatingTask = true;
  }

  onDialogClosed() {
    this.isCreatingTask = false;
  }
}
