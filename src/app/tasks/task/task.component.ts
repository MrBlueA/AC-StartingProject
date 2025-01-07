import {Component, inject, Input} from '@angular/core';
import {Task} from "./task.model";
import {CardComponent} from "../../shared/card/card.component";
import {DatePipe} from "@angular/common";
import {TaskService} from "../tasks.service";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  private tasksService = inject(TaskService);

  onTaskCompleted() {
    this.tasksService.removeTask(this.task.id);
  }
}
