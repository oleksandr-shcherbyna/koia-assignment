import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs';

import { Unsubscribe } from 'src/app/shared/utilities/unsubscribe';
import { BoardGuestsDto } from '../../dto/meeting.dto';
import { MeetingService } from '../../meeting.service';

@Component({
  selector: 'app-meeting-invitees',
  templateUrl: './meeting-invitees.component.html',
  styleUrls: ['./meeting-invitees.component.scss']
})
export class MeetingInviteesComponent extends Unsubscribe implements OnInit {
  @Input() public meetingFormGroup: FormGroup;

  public boardGuests: BoardGuestsDto[] = [];
  public filteredGuests: BoardGuestsDto[] = [];

  constructor(private meetingService: MeetingService) {
    super();
   }

  ngOnInit(): void {
    this.getBoardInvitees();
  }

  public get selectedMembers(): BoardGuestsDto[] {
    return this.meetingFormGroup.get('meetingBoardInvites')?.value;
  }

  private getBoardInvitees(): void {
    this.meetingService.getBoardInvitees().pipe(takeUntil(this.unsubscribed$)).subscribe(boardGuests => {
      this.boardGuests = boardGuests;
      this.filteredGuests = boardGuests;
    });
  }

  public toggleAllBoardMembers(allMembersSelected: boolean): void {
    if (allMembersSelected) {
      this.boardGuests.forEach(guest => {
        if (!this.selectedMembers.includes(guest)) {
          this.selectedMembers.push(guest);
        }
      });
    } else {
      this.selectedMembers.splice(0, this.selectedMembers.length)
    }
  }

  public toggleBoardMember(boardMember: BoardGuestsDto): void {
    if (this.selectedMembers.includes(boardMember)) {
      this.selectedMembers.splice(this.selectedMembers.indexOf(boardMember), 1);
    } else {
      this.selectedMembers.push(boardMember);
    }
  }

  public checkIfMemberSelected(member: BoardGuestsDto): boolean {
    return this.selectedMembers.includes(member);
  }

  public filterBoardMembers(filterValue: any): void {
    this.filteredGuests = this.boardGuests;
    if (filterValue.value) {
      this.filteredGuests = this.boardGuests.filter(guest => {
        let guestName = guest.guestName;
        return guestName.toLowerCase().includes(filterValue.value.toLowerCase());
      });
    }
  }

  public checkMemberByFilter(member: BoardGuestsDto): boolean {
    return this.filteredGuests.includes(member);
  }
}
