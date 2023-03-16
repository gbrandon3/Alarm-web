import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ajuste, Alarm } from '../alarm/alarm';
import { AlarmServiceService } from '../services/alarmService.service';
import { CloseModalService } from '../services/closeModal/closeModal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  createModal:boolean=false
  constructor(private alarmService:AlarmServiceService,
    private closeModal:CloseModalService) { }
    alarms:Array<Alarm>=[]
    accion="Crear"
    selected=0
    detailModal=false
    deleteModal=false;
  ngOnInit() {
      this.alarms.push(new Alarm("Tomar pastilla","Recordatorio","10-03-2023 7:00 Noche",["Contacto 1"],new Ajuste("10 min",4,"15 min"),"Tomar pastillas para la gripe"),new Alarm("Evento 2","Evento","10-03-2023 8:00 Noche",["Contacto 1","Contacto 2"],new Ajuste("10 min",4,"15 min"),"Reunion en el cine","Cinecolombia"))
      this.closeModal.$modalCreate.subscribe((value)=>{
        this.createModal=value
      })
      this.alarmService.$alarmType.subscribe((value)=>{this.selected=value

      this.accion="Editar alarma"})
        this.closeModal.$modalDetail.subscribe((value)=>{this.detailModal=value})
      this.closeModal.$modalDelete.subscribe((value)=>{this.deleteModal=value})
     }

  openCreate(){
    this.createModal=true
    this.accion="Crear alarma"

  }
}
