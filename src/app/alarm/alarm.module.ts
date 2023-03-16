import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { AlarmCreateComponent } from './alarm-create/alarm-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  imports: [
    CommonModule,SharedComponentsModule,FormsModule,ReactiveFormsModule
  ],
  exports:[AlarmCreateComponent,EventDetailComponent,DeleteComponent],
  declarations: [EventDetailComponent,AlarmCreateComponent,DeleteComponent]
})
export class AlarmModule { }
