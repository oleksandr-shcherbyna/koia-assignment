import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { NewMeetingDialogData } from 'src/app/meeting/dto/meeting.dto';

@Component({
  selector: 'app-new-meeting-dialog',
  templateUrl: './new-meeting-dialog.component.html',
  styleUrls: ['./new-meeting-dialog.component.scss']
})
export class NewMeetingDialogComponent {
  public newMeeting: string;

  constructor(public dialogRef: MatDialogRef<NewMeetingDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: NewMeetingDialogData,
              private route: Router) {
    this.newMeeting = JSON.stringify(data.newMeeting, null, 7);
  }

  public navigateToHome(): void {
    this.dialogRef.close();
    this.route.navigateByUrl('');
  }
}
