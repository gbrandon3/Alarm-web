import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,SharedComponentsModule
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
