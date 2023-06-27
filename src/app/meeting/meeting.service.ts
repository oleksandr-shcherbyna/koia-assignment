import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { BoardGuestsDto, MeetingDto } from './dto/meeting.dto';
import { NewMeetingDialogComponent } from '../shared/components/new-meeting-dialog/new-meeting-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private httpClient: HttpClient, private dialog: MatDialog) { }

  public getMeetingTypes(): Observable<string[]> {
    return of(['Board meeting', 'General assembly', 'Other']); // Simulation of sending request to backend
    return this.httpClient.get<string[]>('/api/get/meetingTypes');
  }

  public getBoardInvitees(): Observable<BoardGuestsDto[]> {
    return of([ // Simulation of sending request to backend
      {guestName: 'Wade Warren', position: 'Chair of the board'}, 
      {guestName: 'Floyd Miles', position: 'Board member'},
      {guestName: 'Brooklyn Simmons', position: 'Board member'},
      {guestName: 'Guy Hawkins', position: 'Board secretary'},
      {guestName: 'Darell Steward', position: 'Board treasurer'}
    ]);
    return this.httpClient.get<BoardGuestsDto[]>('/api/get/boardInvitees');
  }

  public addNewMeeting(newMeeting: MeetingDto): Observable<string> | void {
    this.dialog.open(NewMeetingDialogComponent, { // Simulation of sending request to backend
      data: { newMeeting: newMeeting },
      width: '500px',
      autoFocus: false
    });
    return;
    return this.httpClient.post<string>('api/meeitng/add', newMeeting);
  }
}
