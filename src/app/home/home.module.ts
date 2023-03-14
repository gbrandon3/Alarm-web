import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { AlarmItemComponent } from './alarm-item/alarm-item.component';
import { AlarmCreateComponent } from '../alarm/alarm-create/alarm-create.component';
import { AlarmModule } from '../alarm/alarm.module';

@NgModule({
  imports: [
    CommonModule,SharedComponentsModule,AlarmModule
  ],
  declarations: [HomeComponent,AlarmItemComponent]
})
export class HomeModule { }
