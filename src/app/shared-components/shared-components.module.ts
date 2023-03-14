import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrailComponent } from './trail/trail.component';
import { AlarmSettingsComponent } from '../alarm/shared-components/alarm-settings/alarm-settings.component';
import { SharedwithComponent } from '../alarm/shared-components/sharedwith/sharedwith.component';
import { SetTypeComponent } from '../alarm/shared-components/setType/setType.component';
import { SettingsCreateComponent } from '../alarm/shared-components/settings-create/settings-create.component';
import { ShareWithComponent } from '../alarm/shared-components/shareWith/shareWith.component';
import { SelectDateComponent } from '../alarm/shared-components/selectDate/selectDate.component';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HourPickerComponent } from '../alarm/shared-components/hour-picker/hour-picker.component';
@NgModule({
  imports: [
    CommonModule,MatDatepickerModule,MatCardModule
  ],
  exports:[TrailComponent,AlarmSettingsComponent,SharedwithComponent,SetTypeComponent,SettingsCreateComponent,ShareWithComponent,SelectDateComponent,HourPickerComponent],
  declarations: [TrailComponent,AlarmSettingsComponent,SharedwithComponent,SetTypeComponent,SettingsCreateComponent,ShareWithComponent,SelectDateComponent,HourPickerComponent]
})
export class SharedComponentsModule { }
