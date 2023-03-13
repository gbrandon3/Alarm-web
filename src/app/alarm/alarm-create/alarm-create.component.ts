import { Component, OnInit } from '@angular/core';
import { CloseModalService } from 'src/app/services/closeModal/closeModal.service';
import { CreateAlarmService } from 'src/app/services/createAlarm/createAlarm.service';
import { Ajuste } from '../alarm';

@Component({
  selector: 'app-alarm-create',
  templateUrl: './alarm-create.component.html',
  styleUrls: ['./alarm-create.component.scss']
})
export class AlarmCreateComponent implements OnInit {
  typeModal=false;
  type="Elegir tipo";
  ajuset:Ajuste | undefined;
  constructor(private closeModalService:CloseModalService,private createAlarmService:CreateAlarmService) { }

  ngOnInit() {
    this.ajuset=new Ajuste("No",1,"5 min");
    this.createAlarmService.$ajustes.subscribe((value)=>this.type=value)
    this.closeModalService.$modalType.subscribe((value)=>this.typeModal=value);
  }
  openTypeModal(){

    this.typeModal=true;
  }


}
