import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meeting-tasks',
  templateUrl: './meeting-tasks.component.html',
  styleUrls: ['./meeting-tasks.component.scss']
})
export class MeetingTasksComponent {
  @Input() public meetingFormGroup: FormGroup;
  @ViewChild('newTaskField', { static: false }) public newTaskField: ElementRef;

  public taskInteractionActive: boolean = false;
  public editTaskIndex: number | null = null;
  public taskInEditMode: boolean;
  public taskField = new FormControl('', [Validators.required, Validators.maxLength(40)]);

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  public get meetingTasks(): string[] {
    return this.meetingFormGroup.get('meetingTasks')?.value;
  }

  public redactTask(editTask: string | null, taskIndex: number | null): void {
    this.taskInteractionActive = true;
    this.changeDetectorRef.detectChanges();
    this.newTaskField.nativeElement.focus();
    this.taskField.reset();
    editTask ? this.updateTaskProperties(editTask, taskIndex, true) : this.updateTaskProperties(null, null, false);
  }

  public hideTaskInteractionField(): void {
    this.taskInteractionActive = false;
    this.updateTaskProperties(null, null, false);
  }

  public submitTaskChanges(): void {
    if (this.taskField.value && !this.taskField.invalid) {
      this.editTaskIndex !== null ? this.meetingTasks[this.editTaskIndex] = this.taskField.value : this.meetingTasks.push(this.taskField.value);
      this.taskInteractionActive = false;
      this.updateTaskProperties(null, null, false);
    }
  }

  public deleteTask(taskIndex: number): void {
    this.meetingTasks.splice(taskIndex, 1);
    this.taskInteractionActive = false;
    this.updateTaskProperties(null, null, false);
  }

  private updateTaskProperties(taskFieldValue: string | null, editTaskIndex: number | null, taskEditMode: boolean): void {
    this.taskField.setValue(taskFieldValue);
    this.editTaskIndex = editTaskIndex;
    this.taskInEditMode = taskEditMode;
  }
}
