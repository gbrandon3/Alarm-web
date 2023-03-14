import { EventEmitter, Injectable } from '@angular/core';
import { Alarm } from '../alarm/alarm';

@Injectable({
  providedIn: 'root'
})
export class AlarmServiceService {
  $alarmType=new EventEmitter<number>();
constructor() { }

}
