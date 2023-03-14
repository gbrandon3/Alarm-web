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
  contactSelectedH:Array<String>=[]
  selected: Array<boolean> = [];
  ngOnInit() {
    console.log(this.contactsSelected!=null)
    this.contactSelectedH=this.contactsSelected!=null?this.contactsSelected.slice():[]
    this.contactos();
  }
  contactos() {
    if(this.contactsSelected=== undefined){
      this.contactsSelected=[]
    }
    for (let index = 0; index < 30; index++) {
      this.contactList.push(`Contacto ${index}`);
      this.selected.push(
        this.contactSelectedH.indexOf(this.contactList[index]) != -1
      );
    }
  }
  getContactInitals(contact: String): string {
    let initials = contact.split(' ');
    return `${initials[0][0].toUpperCase()}${initials[1][0].toUpperCase()}`;
  }
  isinSelected(value: string) {
    return this.contactSelectedH.indexOf(value);
  }
  addContacts(){
    console.log("AQUIII")
    let contactsS=this.contactSelectedH
    console.log(contactsS)
    this.createAlarmService.$compartidoCon.emit(contactsS)
    this.closeModalService.$modalConact.emit(false)
  }
  addContact(value: string, i: number) {
    let index=this.isinSelected(value)
    if (index==-1) {
      this.selected[i]=true
      this.contactSelectedH!.push(value);

    }else{
      this.selected[i]=false
      this.contactSelectedH!.splice(index,1)
    }
    this.contactSelectedH!.sort((n1, n2) => {
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
