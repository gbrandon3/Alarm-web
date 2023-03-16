import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlarmModule } from './alarm/alarm.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { CalendarModule } from './calendar/calendar.module';
import { ContactsModule } from './contacts/contacts.module';
import { AccountComponent } from './account/account.component';
import { AccountModule } from './account/account.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [MatNativeDateModule,
    BrowserModule,
    AppRoutingModule,LoginModule,HomeModule,AlarmModule, BrowserAnimationsModule,CalendarModule,ContactsModule,AccountModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
