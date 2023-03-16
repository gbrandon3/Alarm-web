import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekView',
  templateUrl: './weekView.component.html',
  styleUrls: ['./weekView.component.scss']
})
export class WeekViewComponent implements OnInit {
  hours:string[]=["","1:00AM", "2:00AM", "3:00AM", "4:00AM", "5:00AM", "6:00AM", "7:00AM", "8:00AM", "9:00AM", "10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM", "6:00PM", "7:00PM", "8:00PM", "9:00PM", "10:00PM", "11:00PM", "12:00PM"];
  days:number[]=[0]
  constructor() { }

  ngOnInit() {
    let date: Date = new Date();

  for (let index = 0; index < 5; index++) {
     this.days.push(date.getDate()+index);

  }
  console.log(this.days);

  }

}
