import { Component, Input, OnInit } from '@angular/core';
import { CloseModalService } from 'src/app/services/closeModal/closeModal.service';
import { CreateAlarmService } from 'src/app/services/createAlarm/createAlarm.service';

@Component({
  selector: 'app-setType',
  templateUrl: './setType.component.html',
  styleUrls: ['./setType.component.scss']
})
export class SetTypeComponent implements OnInit {
   @Input() type:string | undefined;
  constructor(private closeModalService:CloseModalService,private createAlarmService:CreateAlarmService ) { }

  ngOnInit() {
  }
  closeModal(){
    this.closeModalService.$modalType.emit(false)

  }
  isChecked(value:string):boolean{

    return value===this.type;
  }
  setType(value:string){
    console.log(this.type!);
    this.closeModalService.$modalType.emit(false)
    this.createAlarmService.$alarmType.emit(value)
  }
}
