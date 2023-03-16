import { Component, Input, OnInit } from '@angular/core';
import { Ajuste } from 'src/app/alarm/alarm';
import { CloseModalService } from 'src/app/services/closeModal/closeModal.service';
import { CreateAlarmService } from 'src/app/services/createAlarm/createAlarm.service';

@Component({
  selector: 'app-alarm-settings',
  templateUrl: './alarm-settings.component.html',
  styleUrls: ['./alarm-settings.component.scss']
})
export class AlarmSettingsComponent implements OnInit {
  @Input() ajustes:Ajuste | undefined;
  @Input() creating:boolean;
  constructor(private serviceModal:CloseModalService,private crearAlarma:CreateAlarmService) {

   }

  ngOnInit() {
  }
  openModal(accion:string){
    if(this.creating){
    this.serviceModal.$modalSettings.emit(true)
    this.crearAlarma.$settingAccion.emit(accion)}
  }
}
