import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CloseModalService {
$modalType=new EventEmitter<any>();

$modalConact=new EventEmitter<any>();
constructor() { }

}
