import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CloseModalService {
$modalType=new EventEmitter<any>();
$modalSettings=new EventEmitter<any>();
$modalConact=new EventEmitter<any>();
constructor() { }

}
