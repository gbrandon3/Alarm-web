import { Component, Input, OnInit } from '@angular/core';
import { CloseModalService } from 'src/app/services/closeModal/closeModal.service';
import { CreateAlarmService } from 'src/app/services/createAlarm/createAlarm.service';

@Component({
  selector: 'app-shareWith',
  templateUrl: './shareWith.component.html',
  styleUrls: ['./shareWith.component.scss'],
})
export class ShareWithComponent implements OnInit {
  constructor(private createAlarmService:CreateAlarmService,private closeModalService:CloseModalService) {}
  contactList: Array<string> = [];
  @Input() contactsSelected: Array<string> |  undefined;
  selected: Array<boolean> = [];
  ngOnInit() {
    this.contactos();
  }
  contactos() {
    if(this.contactsSelected=== undefined){
      this.contactsSelected=[]
    }
    for (let index = 0; index < 30; index++) {
      this.contactList.push(`Contacto ${index}`);
      this.selected.push(
        this.contactsSelected!.indexOf(this.contactList[index]) != -1
      );
    }
  }
  getContactInitals(contact: String): string {
    let initials = contact.split(' ');
    return `${initials[0][0].toUpperCase()}${initials[1][0].toUpperCase()}`;
  }
  isinSelected(value: string) {
    return this.contactsSelected!.indexOf(value);
  }
  addContacts(){
    let contactsS=this.contactsSelected!
    this.createAlarmService.$compartidoCon.emit(contactsS)
    this.closeModalService.$modalConact.emit(false)
  }
  addContact(value: string, i: number) {
    let index=this.isinSelected(value)
    if (index==-1) {
      this.selected[i]=true
      this.contactsSelected!.push(value);

    }else{
      this.selected[i]=false
      this.contactsSelected!.splice(index,1)
    }
    this.contactsSelected!.sort((n1, n2) => {
      if (n1 > n2) {
        return 1;
      }

      if (n1 < n2) {
        return -1;
      }

      return 0;
    });
  }
  closeModal() {
    this.closeModalService.$modalConact.emit(false)
  }
}
