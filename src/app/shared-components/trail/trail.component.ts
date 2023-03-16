import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trail',
  templateUrl: './trail.component.html',
  styleUrls: ['./trail.component.scss']
})
export class TrailComponent implements OnInit {
  @Input() selectedI:number;
  constructor(private routerPath: Router) { }

  ngOnInit() {
  }
  goToCalendar(){
    if(this.selectedI!=1){
      this.routerPath.navigate([`/calendar`])
    }
  }
  goToHome(){
    if(this.selectedI!=0){
      this.routerPath.navigate([`/home`])
    }

  }
  goToContacts(){
    if(this.selectedI!=2){
      this.routerPath.navigate([`/contacts`])
    }
  }
  goToAccount(){
    if(this.selectedI!=3){
      this.routerPath.navigate(['/account'])
    }
  }
}
