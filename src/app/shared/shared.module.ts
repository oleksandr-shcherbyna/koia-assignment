import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatreialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatreialModule,
  ],
  exports: [
    MatreialModule
  ]
})
export class SharedModule { }
