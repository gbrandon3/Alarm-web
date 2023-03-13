import { Component, Input, OnInit } from '@angular/core';
import { Ajuste } from 'src/app/alarm/alarm';

@Component({
  selector: 'app-alarm-settings',
  templateUrl: './alarm-settings.component.html',
  styleUrls: ['./alarm-settings.component.scss']
})
export class AlarmSettingsComponent implements OnInit {
  @Input() ajustes:Ajuste | undefined;
  constructor() { }

  ngOnInit() {
  }

}
