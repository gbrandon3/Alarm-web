import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactList:string[]=[]
  getContactInitals(contact:String):string{
    let initials=contact.split(" ");
    return `${initials[0][0].toUpperCase()}${initials[1][0].toUpperCase()}`;
  }
  constructor() { }

  ngOnInit() {
    for (let index = 0; index < 9; index++) {
      this.contactList.push(`Contacto ${index}`);

    }
  }

}
