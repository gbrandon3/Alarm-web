import { Component, Input, OnInit } from '@angular/core';
import { Alarm } from 'src/app/alarm/alarm';
import { AlarmServiceService } from 'src/app/services/alarmService.service';
import { CloseModalService } from 'src/app/services/closeModal/closeModal.service';
@Component({
  selector: 'app-alarm-item',
  templateUrl: './alarm-item.component.html',
  styleUrls: ['./alarm-item.component.scss']
})
export class AlarmItemComponent implements OnInit {
 @Input() alarm:Alarm | undefined;
 @Input() index:number
  constructor(private openServiceModal:CloseModalService,private alarmService:AlarmServiceService) { }

  ngOnInit() {

  }
  openDelete(){}
  openDetail(){
    this.openServiceModal.$modalDetail.emit(true);
    this.alarmService.$alarmType.emit(this.index)
  }
  openEdit(){
    this.openServiceModal.$modalCreate.emit(true);
    this.alarmService.$alarmType.emit(this.index)
  }
}
