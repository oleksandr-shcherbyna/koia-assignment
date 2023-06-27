import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { takeUntil } from 'rxjs/operators';

import { MeetingService } from '../meeting.service';
import { Unsubscribe } from 'src/app/shared/utilities/unsubscribe';
import { MeetingLocationsEnum, MeetingLocationValidatorsDto, meetingTypeValidators } from '../dto/meeting.dto';

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.scss']
})

export class MeetingDetailsComponent extends Unsubscribe implements OnInit {
  @Input() public meetingFormGroup: FormGroup;
  @Output() public emitSelectedDocuments = new EventEmitter<File[]>();

  public meetingTypes: string[] = [];
  public selectedMeetingType: string;
  public selectedLocation: string = MeetingLocationsEnum.ONLINE;
  public meetingLocations = MeetingLocationsEnum;
  private meetingTypeValidators: MeetingLocationValidatorsDto = meetingTypeValidators;
  public selectedDocuments: File[] = [];

  constructor(private meetingService: MeetingService, private snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {
    this.getMeetingTypes();
  }

  public get meetingLocationFormGroup(): FormGroup {
    return (<FormGroup>this.meetingFormGroup.get('meetingLocationType')!);
  }

  private getMeetingTypes(): void {
    this.meetingService.getMeetingTypes().pipe(takeUntil(this.unsubscribed$)).subscribe(meetingTypes => {
      this.meetingTypes = meetingTypes;
      this.setSelectedMeetingType(this.meetingTypes[0]);
    });
  }
  
  public changeMeetingType(event: MouseEvent, meetingType: string): void {
    event.preventDefault();
    this.setSelectedMeetingType(meetingType);
  }

  private setSelectedMeetingType(type: string): void {
    this.selectedMeetingType = type;
    this.meetingFormGroup.get('meetingType')!.setValue(this.selectedMeetingType);
  }

  public clearFieldByClick(event: MouseEvent, fieldName: string): void {
    event.stopPropagation();
    this.meetingFormGroup.get(fieldName)!.setValue(null);
    this.meetingFormGroup.get(fieldName)!.markAsPristine();
    this.meetingFormGroup.get(fieldName)!.markAsUntouched();
  }

  public changeLocationType(locationType: string): void {
    this.selectedLocation = locationType;
    this.meetingLocationFormGroup
    Object.keys(this.meetingLocationFormGroup.controls).forEach(key => {
      if (key !== locationType) {
        this.clearLocationFormFields(this.meetingLocationFormGroup.controls[key], null, true)
      } else {
        this.clearLocationFormFields(this.meetingLocationFormGroup.controls[key], this.meetingTypeValidators[locationType], false)
      }
    });
  }

  private clearLocationFormFields(formControl: AbstractControl, validators: ValidatorFn[] | null, shouldDisable: boolean): void {
    shouldDisable ? formControl.disable() : formControl.enable();
    formControl.setValidators(validators);
    formControl.setErrors(null);
    formControl.setValue(null);
    formControl.markAsPristine();
    formControl.markAsUntouched();
    formControl.updateValueAndValidity(); 
  }

  public onFileSelected(event: any): void {
    const selectedFile = event.target.files[0];
    if (selectedFile.name) {
      if (selectedFile.name.slice(-4).toLowerCase() !== '.pdf') {
        this.snackBar.open('Make sure you are selecting files with ".pdf" extension', '', {
          duration: 4000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
        return;
      }
      this.selectedDocuments.push(selectedFile);
      this.emitSelectedDocuments.emit(this.selectedDocuments);
    }
  }

  public removeAttachedDocument(documentIndex: number): void {
    this.selectedDocuments.splice(documentIndex, 1);
  }
}
