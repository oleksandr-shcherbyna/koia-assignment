import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './home/home.module';
import { MeetingModule } from './meeting/meeting.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    HomeModule,
    MeetingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
