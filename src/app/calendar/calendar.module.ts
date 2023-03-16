import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { DayViewComponent } from './components/dayView/dayView.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { WeekViewComponent } from './components/weekView/weekView.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';

@NgModule({
  imports: [
    CommonModule,SharedComponentsModule
  ],
  exports:[DayViewComponent],
  declarations: [CalendarComponent,DayViewComponent,WeekViewComponent,]
})
export class CalendarModule { }
