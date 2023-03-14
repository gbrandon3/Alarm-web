import { Component, Input, OnInit } from '@angular/core';
import { CloseModalService } from 'src/app/services/closeModal/closeModal.service';
import { Ajuste, Alarm, AlarmEvent } from '../alarm';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  contactsOpened:boolean=false
  constructor(private closeModalService:CloseModalService) { }
 @Input() evento: Alarm | undefined
  ngOnInit() {
    this.closeModalService.$modalConact.subscribe((value)=>{
      this.contactsOpened=value
    })

  }
  openModal(){

    this.contactsOpened=true
  }
  closeModal(){
    this.closeModalService.$modalDetail.emit(false)
  }
}
