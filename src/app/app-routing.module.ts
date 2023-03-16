import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AlarmCreateComponent } from './alarm/alarm-create/alarm-create.component';
import { EventDetailComponent } from './alarm/event-detail/event-detail.component';
import { HourPickerComponent } from './alarm/shared-components/hour-picker/hour-picker.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path:'calendar',
    component:CalendarComponent,
  },{
    path:'contacts',
    component:ContactsComponent,
  },{
    path:'account',
    component:AccountComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
