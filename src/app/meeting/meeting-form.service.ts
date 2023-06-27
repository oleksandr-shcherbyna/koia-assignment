import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { validateDate } from '../shared/validators/datepicker.validator';
import { validateUrl } from '../shared/validators/url.validator';

@Injectable({
  providedIn: 'root'
})
export class MeetingFormService {

  constructor(private formBuilder: FormBuilder) { }

  public emptyMeetingFormGroup(): FormGroup {
    return this.formBuilder.group({
      meetingType: null,
      meetingName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      meetingDate: [null, [validateDate()]],
      meetingStartTime: [null, [Validators.required]],
      meetingEndTime: [null, [Validators.required]],
      meetingLocationType: this.formBuilder.group({
        meetingAdress: {value: null, disabled: true},
        meetingOnline: [null, [Validators.required, validateUrl()]],
      }),
      meetingTasks: [[]],
      meetingBoardInvites: [[]],
    });
  }
}
