import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { MeetingFormService } from './meeting-form.service';
import { MeetingService } from './meeting.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {
  public meetingFormGroup!: FormGroup;
  private selectedDocuments: File[];

  constructor(private meetingFormService: MeetingFormService, private meetingService: MeetingService) {}

  ngOnInit(): void {
    this.meetingFormGroup = this.meetingFormService.emptyMeetingFormGroup();
  }

  public saveMeeting(isDraft: boolean): void {
    if (this.meetingFormGroup.invalid && !isDraft) {
      this.validateAllFormFields(this.meetingFormGroup);
      return;
    }
    const newMeeting = this.meetingFormGroup.getRawValue();
    newMeeting.userDocuments = this.getUserFormDataDocuments();
    isDraft ? this.meetingService.addNewMeeting(newMeeting) : this.meetingService.addAsDraft(newMeeting);
  }

  public setUserDocuments(event: File[]): void {
    this.selectedDocuments = event;
  }

  private getUserFormDataDocuments(): FormData {
    const userDocuments = new FormData();
    if (this.selectedDocuments) {
      this.selectedDocuments.forEach(document => {
        userDocuments.append(document.name, document);
      });
    }
    return userDocuments;
  }

  private validateAllFormFields(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        this.validateAllFormFields(control);
      }
    });
  }
}
