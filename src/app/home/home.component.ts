import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CloseModalService } from '../services/closeModal/closeModal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  createModal:boolean=false
  constructor(private routerPath: Router,
    private router: ActivatedRoute,private closeModal:CloseModalService) { }

  ngOnInit() {
      this.closeModal.$modalCreate.subscribe((value)=>{
        this.createModal=value
      })
  }
  openCreate(){
    this.createModal=true

  }
}
