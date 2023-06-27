import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatreialModule } from './material.module';
import { NewMeetingDialogComponent } from './components/new-meeting-dialog/new-meeting-dialog.component';

@NgModule({
  declarations: [
    NewMeetingDialogComponent
  ],
  imports: [
    CommonModule,
    MatreialModule,
  ],
  exports: [
    MatreialModule
  ]
})
export class SharedModule { }
