import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hour-picker',
  templateUrl: './hour-picker.component.html',
  styleUrls: ['./hour-picker.component.scss'],
})
export class HourPickerComponent implements OnInit {
  constructor() {}
  hour: Array<string> = [];
  minutes:Array<string>=[]
  time1=["Mañana","Tarde"]
  time2=["Mañana","Noche"]
  time=["Am","Pm"]
  selectedHour=0
  selectedMinute=0
  previousMinute=0;
  nextMinute=0;
  previoushour=0;
  nextHour=0;
  randomHour=0
  randomMinute=0
  selectedTime=0
  oTime=1
  ngOnInit() {
    this.randomHour= Math.floor(Math.random()*11)
    this.previoushour=this.randomHour!=0?this.randomHour-1:11
    this.nextHour=this.randomHour!=11?this.randomHour+1:0

    this.randomMinute=Math.floor(Math.random()*59)
    this.previousMinute=this.randomMinute!=0?this.randomMinute-1:59
    this.nextMinute=this.randomMinute!=59?this.randomMinute+1:0
    console.log(this.randomHour)
    for (let i = 0; i < 12; i++) {
      if (i+1 < 10) {
        let yo: string = `0${i + 1}`;
        this.hour.push(yo);
      } else {
        let yo: string = `${i+1}`;
        this.hour.push(yo);
      }
    }
    for (let i = 0; i < 60; i++) {
      if (i < 10) {
        let yo: string = `0${i}`;
        this.minutes.push(yo);
      } else {
        let yo: string = `${i}`;
        this.minutes.push(yo);
      }
    }
    console.log(this.hour)
    console.log(this.minutes)
    this.selectedHour=parseInt(this.hour[this.randomHour])
  }
  changeMinute(value:number){
    if(this.randomMinute==0){
      this.randomMinute=value>0?value+this.randomMinute:59
      if(this.randomMinute==59){
        this.changeHour(-1)
      }
    }else if(this.randomMinute==59){
      this.randomMinute=value>0?0:this.randomMinute+value
      if(this.randomMinute==0){
        console.log(this.randomMinute)
        this.changeHour(1)
      }
    }else{
      this.randomMinute=this.randomMinute+value
    }
    this.previousMinute=this.randomMinute!=0?this.randomMinute-1:59
    this.nextMinute=this.randomMinute!=59?this.randomMinute+1:0

  }
  changeTime(){
    this.selectedTime=this.selectedTime==1?0:1
  }
  changeHour( value:number){
    if(this.randomHour==0){

      this.randomHour=value>0?value+this.randomHour:11
      if(this.randomHour==11){
        this.changeTime()
      }
    }else if(this.randomHour==11){

      this.randomHour=value>0?0:this.randomHour+value
      if(this.randomHour==0){

        this.changeTime()
      }
    }else{
      this.randomHour=value+this.randomHour
    }
    this.previoushour=this.randomHour!=0?this.randomHour-1:11
    this.nextHour=this.randomHour!=11?this.randomHour+1:0
  }
  }

