import { Component, OnInit } from '@angular/core';
import { CloseModalService } from 'src/app/services/closeModal/closeModal.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(private closeModalService:CloseModalService) { }

  ngOnInit() {
  }

  closeModal() {
    this.closeModalService.$modalDelete.emit(false);

  }
}
