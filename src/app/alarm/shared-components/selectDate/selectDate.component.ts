import { Component, OnInit } from '@angular/core';
import { CloseModalService } from 'src/app/services/closeModal/closeModal.service';
import { CreateAlarmService } from 'src/app/services/createAlarm/createAlarm.service';

@Component({
  selector: 'app-selectDate',
  templateUrl: './selectDate.component.html',
  styleUrls: ['./selectDate.component.scss']
})
export class SelectDateComponent implements OnInit {
  selected:Date|undefined;
  constructor( private createAlarmService:CreateAlarmService,private closeModalService:CloseModalService) { }
  todayDate:Date = new Date();
  ngOnInit() {

  }
  selectDate(event:any){


    this.createAlarmService.$date.emit(this.selected!.toISOString().split("T")[0])
    this.closeModalService.$modalDate.emit(false)
  }
  closeModal(){
    this.closeModalService.$modalDate.emit(false)
  }
}
