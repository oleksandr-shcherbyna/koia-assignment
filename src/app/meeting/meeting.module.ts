import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { MeetingComponent } from './meeting.component';
import { MeetingDetailsComponent } from './meeting-details/meeting-details.component';
import { MeetingSpecificsComponent } from './meeting-specifics/meeting-specifics.component';
import { MeetingInviteesComponent } from './meeting-specifics/meeting-invitees/meeting-invitees.component';
import { MeetingTasksComponent } from './meeting-specifics/meeting-tasks/meeting-tasks.component';

const routes: Routes = [
  {
    path: 'meeting',
    component: MeetingComponent
  }
];

@NgModule({
  declarations: [
    MeetingComponent,
    MeetingDetailsComponent,
    MeetingSpecificsComponent,
    MeetingInviteesComponent,
    MeetingTasksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MeetingModule { }
