import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { AlarmCreateComponent } from './alarm-create/alarm-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,SharedComponentsModule,FormsModule,ReactiveFormsModule
  ],
  exports:[AlarmCreateComponent,EventDetailComponent],
  declarations: [EventDetailComponent,AlarmCreateComponent]
})
export class AlarmModule { }
