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
  settingsModal=false
  ajuset:Ajuste | undefined;
  constructor(private closeModalService:CloseModalService,private createAlarmService:CreateAlarmService) { }
  ajustes:string=""
  ngOnInit() {

    this.createAlarmService.$ajustes.subscribe((value)=>this.ajuset=value)
    this.createAlarmService.$settingAccion.subscribe((value)=>this.ajustes=value);
    this.ajuset=new Ajuste("No",1,"5 min");
    this.createAlarmService.$alarmType.subscribe((value)=>this.type=value)
    this.closeModalService.$modalType.subscribe((value)=>this.typeModal=value);
    this.closeModalService.$modalSettings.subscribe((value)=>this.settingsModal=value)
  }

  openTypeModal(){

    this.typeModal=true;
  }


}
