import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {NewTaskData, Task} from "../task/task.model";
import { FormsModule } from "@angular/forms";
import {TaskService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() dialogClosed = new EventEmitter<void>();
  private tasksService = inject(TaskService);
  formTitle = '';     // form binding
  formSummary = '';   // form binding
  formDate = '';      // form binding
  @Output() task!: Task;

  onCloseDialog() {
    this.dialogClosed.emit();
  }

  onCreateTask() {
    const newTask: NewTaskData = {
      title: this.formTitle,
      summary: this.formSummary,
      dueDate: this.formDate
    };
    this.tasksService.createTask(newTask, this.userId);
    this.dialogClosed.emit();
  }
}
