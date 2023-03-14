import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CloseModalService } from 'src/app/services/closeModal/closeModal.service';
import { CreateAlarmService } from 'src/app/services/createAlarm/createAlarm.service';
import { Ajuste, Alarm } from '../alarm';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-alarm-create',
  templateUrl: './alarm-create.component.html',
  styleUrls: ['./alarm-create.component.scss'],
})
export class AlarmCreateComponent implements OnInit {
  typeModal = false;
  @Input() accion: String;
  @Input() alarma: Alarm;
  type = 'Elegir tipo';
  settingsModal = false;
  ajuset: Ajuste | undefined;
  constructor(
    private closeModalService: CloseModalService,
    private formBuilder: FormBuilder,
    private createAlarmService: CreateAlarmService
  ) {}
  ajustes: string = '';
  contactList:Array<string>= [];
  contactModal = false;
  dateModal = false;
  fechaString = 'Repetir cada';
  days = ['D', 'L', 'M', 'Mi', 'J', 'V', 'S'];
  selecedDays = ['D', 'L', 'M', 'Mi', 'J', 'V', 'S'];
  time1 = ['Mañana', 'Tarde'];
  time2 = ['Mañana', 'Noche'];
  time = ['Am', 'Pm'];
  selectedHour = 5;
  alarmGroup: FormGroup;

  previousHour = 4;
  nextHour = 6;
  selectedMinute = 0;
  nextMinute = 1;
  previousMinute = 59;
  selectedTime = 0;
  hour = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  minutes = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
  ];

  ngOnInit() {
    if (this.alarma != null && this.accion==="Editar alarma") {
      this.llenarCampos(this.alarma);
    } else {
      this.alarmGroup = this.formBuilder.group({
        nombre: [''],
        desc: [''],
        lugar: [''],
        fecha: [''],
      });
      this.ajuset = new Ajuste('No', 1, '5 min');
    }
    this.createAlarmService.$ajustes.subscribe(
      (value) => (this.ajuset = value)
    );
    this.createAlarmService.$settingAccion.subscribe(
      (value) => (this.ajustes = value)
    );

    this.closeModalService.$modalConact.subscribe(
      (value) => (this.contactModal = value)
    );
    this.createAlarmService.$alarmType.subscribe(
      (value) => (this.type = value)
    );
    this.closeModalService.$modalType.subscribe(
      (value) => (this.typeModal = value)
    );
    this.closeModalService.$modalSettings.subscribe(
      (value) => (this.settingsModal = value)
    );
    this.createAlarmService.$compartidoCon.subscribe(
      (value) => (this.contactList = value)
    );
    this.closeModalService.$modalDate.subscribe(
      (value) => (this.dateModal = value)
    );
    this.createAlarmService.$date.subscribe((value) => {
      this.fechaString = value;
      if (this.fechaString != 'Repetir cada') {
        this.selecedDays = [];
      }
    });
  }
  date(value:string){
  let date=value.split(" ")

 return new Date(date[0])

  }
  setHour(value: string){
    let date=value.split(" ")

    this.selectedHour=Number( date[1].split(":")[0])-1
    this.selectedMinute=Number(date[1].split(":")[1])
    this.selectedTime=date[3]=="Mañana"?0:1
  }
  llenarCampos(alarma: Alarm) {

    if (alarma.tipo == 'Evento') {
      this.alarmGroup = this.formBuilder.group({
        nombre: [alarma.nombre],
        desc: [alarma.descripcion],
        lugar: [alarma.lugar],
        fecha: [formatDate(this.date(alarma.fecha), 'yyyy-MM-dd', 'en')],
      });

    }else{
      this.alarmGroup = this.formBuilder.group({
        nombre: [alarma.nombre],
        desc: [alarma.descripcion],
        lugar: [""],
        fecha: [""]
      });
      this.fechaString=this.date(alarma.fecha).toISOString().split("T")[0]
    }
    this.contactList=alarma.contactList
    this.type=alarma.tipo
    this.setHour(alarma.fecha)
    this.ajuset=alarma.ajuste
    this.selecedDays=[]

  }
  changeMinute(value: number) {
    if (this.selectedMinute == 0) {
      this.selectedMinute = value > 0 ? value + this.selectedMinute : 59;
      if (this.selectedMinute == 59) {
        this.changeHour(-1);
      }
    } else if (this.selectedMinute == 59) {
      this.selectedMinute = value > 0 ? 0 : this.selectedMinute + value;
      if (this.selectedMinute == 0) {
        console.log(this.selectedMinute);
        this.changeHour(1);
      }
    } else {
      this.selectedMinute = this.selectedMinute + value;
    }
    this.previousMinute =
      this.selectedMinute != 0 ? this.selectedMinute - 1 : 59;
    this.nextMinute = this.selectedMinute != 59 ? this.selectedMinute + 1 : 0;
  }
  changeTime() {
    this.selectedTime = this.selectedTime == 1 ? 0 : 1;
  }
  changeHour(value: number) {
    if (this.selectedHour == 0) {
      this.selectedHour = value > 0 ? value + this.selectedHour : 11;
      if (this.selectedHour == 11) {
        this.changeTime();
      }
    } else if (this.selectedHour == 11) {
      this.selectedHour = value > 0 ? 0 : this.selectedHour + value;
      if (this.selectedHour == 0) {
        this.changeTime();
      }
    } else {
      this.selectedHour = value + this.selectedHour;
    }
    this.previousHour = this.selectedHour != 0 ? this.selectedHour - 1 : 11;
    this.nextHour = this.selectedHour != 11 ? this.selectedHour + 1 : 0;
  }
  selectDay(value: string) {
    if (this.fechaString != 'Repetir cada') {
      this.fechaString = 'Repetir cada';
    }
    let index = this.selecedDays.indexOf(value);
    if (index == -1) {
      this.selecedDays.push(value);
    } else {
      this.selecedDays.splice(index, 1);
    }
  }
  openContactModal() {
    console.log(this.contactList);
    this.contactModal = true;
  }
  openTypeModal() {
    this.typeModal = true;
  }

  openDateModal() {
    this.dateModal = true;
  }
  closeModal() {
    this.closeModalService.$modalCreate.emit(false);
  }
}
