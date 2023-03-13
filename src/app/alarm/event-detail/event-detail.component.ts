import { Component, OnInit } from '@angular/core';
import { CloseModalService } from 'src/app/services/closeModal/closeModal.service';
import { Ajuste, AlarmEvent } from '../alarm';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  contactsOpened:boolean=false
  constructor(private closeModalService:CloseModalService) { }
 evento: AlarmEvent | undefined
  ngOnInit() {
    this.closeModalService.$modalConact.subscribe((value)=>{
      this.contactsOpened=value
    })
    this.evento=new AlarmEvent("Evento","10-03-2023 10:00 Mañana","Lugar 1",new Ajuste("10 min",0.4,"5 min"),["Contacto 1","Contacto 2"],"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum")
  }
  openModal(){

    this.contactsOpened=true
  }
}
