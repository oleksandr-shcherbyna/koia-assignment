import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-meeting-specifics',
  templateUrl: './meeting-specifics.component.html',
  styleUrls: ['./meeting-specifics.component.scss']
})
export class MeetingSpecificsComponent {
  @Input() public meetingFormGroup: FormGroup;

  constructor() { }
}
