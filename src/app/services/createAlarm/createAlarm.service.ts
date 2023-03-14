import { EventEmitter, Injectable } from '@angular/core';
import { Ajuste } from 'src/app/alarm/alarm';

@Injectable({
  providedIn: 'root'
})
export class CreateAlarmService {
  $alarmType=new EventEmitter<string>();
  $ajustes=new EventEmitter<Ajuste>();
  $settingAccion=new EventEmitter<string>();
  $compartidoCon=new EventEmitter<any>();
  $date=new EventEmitter<string>();
constructor() { }

}
