import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmCreateComponent } from './alarm/alarm-create/alarm-create.component';
import { EventDetailComponent } from './alarm/event-detail/event-detail.component';
import { HourPickerComponent } from './alarm/shared-components/hour-picker/hour-picker.component';
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
  { path: 'detail/event', component: EventDetailComponent, pathMatch: 'full' },
  { path: 'create', component: AlarmCreateComponent, pathMatch: 'full' },
  { path: 'hour', component: HourPickerComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
