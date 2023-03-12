import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrailComponent } from './trail/trail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[TrailComponent],
  declarations: [TrailComponent]
})
export class SharedComponentsModule { }
