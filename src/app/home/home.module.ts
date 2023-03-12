import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { AlarmItemComponent } from './alarm-item/alarm-item.component';

@NgModule({
  imports: [
    CommonModule,SharedComponentsModule
  ],
  declarations: [HomeComponent,AlarmItemComponent]
})
export class HomeModule { }
