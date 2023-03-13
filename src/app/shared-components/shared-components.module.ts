import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrailComponent } from './trail/trail.component';
import { AlarmSettingsComponent } from './alarm-settings/alarm-settings.component';
import { SharedwithComponent } from './sharedwith/sharedwith.component';
import { SetTypeComponent } from './setType/setType.component';
import { SettingsCreateComponent } from './settings-create/settings-create.component';
import { ShareWithComponent } from './shareWith/shareWith.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[TrailComponent,AlarmSettingsComponent,SharedwithComponent,SetTypeComponent,SettingsCreateComponent,ShareWithComponent],
  declarations: [TrailComponent,AlarmSettingsComponent,SharedwithComponent,SetTypeComponent,SettingsCreateComponent,ShareWithComponent]
})
export class SharedComponentsModule { }
