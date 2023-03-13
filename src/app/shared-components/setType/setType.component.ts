import { Component, OnInit } from '@angular/core';
import { CloseModalService } from 'src/app/services/closeModal/closeModal.service';

@Component({
  selector: 'app-setType',
  templateUrl: './setType.component.html',
  styleUrls: ['./setType.component.scss']
})
export class SetTypeComponent implements OnInit {

  constructor(private closeModalService:CloseModalService) { }

  ngOnInit() {
  }
  closeModal(){
    this.closeModalService.$modalType.emit(false)

  }
}
