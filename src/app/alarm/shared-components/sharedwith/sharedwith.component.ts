import { Component, Input, OnInit } from '@angular/core';
import { CloseModalService } from 'src/app/services/closeModal/closeModal.service';

@Component({
  selector: 'app-sharedwith',
  templateUrl: './sharedwith.component.html',
  styleUrls: ['./sharedwith.component.scss']
})
export class SharedwithComponent implements OnInit {
  @Input() conactList:string[] | undefined;

  constructor(private closeModalService:CloseModalService) { }
  getContactInitals(contact:String):string{
    let initials=contact.split(" ");
    return `${initials[0][0].toUpperCase()}${initials[1][0].toUpperCase()}`;
  }
  ngOnInit() {
  }
  closeModal(){
    this.closeModalService.$modalConact.emit(false)

  }

}
