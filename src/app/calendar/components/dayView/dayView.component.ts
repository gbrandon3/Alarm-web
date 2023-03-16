import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dayView',
  templateUrl: './dayView.component.html',
  styleUrls: ['./dayView.component.scss']
})
export class DayViewComponent implements OnInit {
  hours:string[]=["1:00AM", "2:00AM", "3:00AM", "4:00AM", "5:00AM", "6:00AM", "7:00AM", "8:00AM", "9:00AM", "10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM", "6:00PM", "7:00PM", "8:00PM", "9:00PM", "10:00PM", "11:00PM", "12:00PM"];
  alarms:String[]=["8:00AM","10:00AM","1:00PM"]
  nombres:String[]=["Evento","Tomar pastilla","Ir al trabajo"]
  types:String[]=["Evento","Recordatorio","Recordatorio"]
  constructor() { }

  ngOnInit() {
  }
  getName(index:number){
    return this.nombres[this.alarms.indexOf(this.hours[index])]
  }
  getType(index:number){
    return this.types[this.alarms.indexOf(this.hours[index])]=="Evento"
  }
}
