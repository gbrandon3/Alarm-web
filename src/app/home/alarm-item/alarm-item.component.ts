import { Component, OnInit } from '@angular/core';
import { Alarm } from 'src/app/alarm/alarm';
@Component({
  selector: 'app-alarm-item',
  templateUrl: './alarm-item.component.html',
  styleUrls: ['./alarm-item.component.scss']
})
export class AlarmItemComponent implements OnInit {
  alarm:Alarm | undefined;
  constructor() { }

  ngOnInit() {
    this.alarm=new Alarm("Nombre","Recordatorio","10-03-2023 7:00 Noche",[])
  }

}
