import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateAlarmService {
  $alarmType=new EventEmitter<String>();
  $ajustes=new EventEmitter<any>();
  $compartidoCon=new EventEmitter<any>();
constructor() { }

}
