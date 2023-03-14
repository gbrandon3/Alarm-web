import { Component, Input, OnInit } from '@angular/core';
import { Ajuste } from 'src/app/alarm/alarm';
import { CloseModalService } from 'src/app/services/closeModal/closeModal.service';
import { CreateAlarmService } from 'src/app/services/createAlarm/createAlarm.service';

@Component({
  selector: 'app-settings-create',
  templateUrl: './settings-create.component.html',
  styleUrls: ['./settings-create.component.scss'],
})
export class SettingsCreateComponent implements OnInit {
  opcionesR = [
    '5 minutos',
    '10 minutos',
    '15 minutos',
    '20 minutos',
    'No repetir',
  ];
  valuesR = ['5 min', '10 min', '15 min', '20 min', 'No repetir'];
  opcionesN = [
    '30 minutos antes',
    '25 minutos antes',
    '20 minutos antes',
    '15 minutos antes',
    'No notificar antes',
  ];
  valuesN = ['30 min', '25 min', '20 min', '15 min', 'No'];
  @Input() accion: String | undefined;
  @Input() ajuste: Ajuste | undefined;
  constructor(
    private closeModalService: CloseModalService,
    private createAlarmService: CreateAlarmService
  ) {}

  ngOnInit() {}
  isSelected(i: number) {
    if (this.accion === 'Notificar cada') {
      return this.valuesR[i] === this.ajuste?.notificarCada!;
    } else if (this.accion == 'Notificar Antes') {
      return this.valuesN[i]=== this.ajuste?.notificarAntes
    }
    return false;
  }
  selectOption(i: number) {
    if (this.accion === 'Notificar cada') {
      let ajusteN = new Ajuste(
        this.ajuste?.notificarAntes!,
        this.ajuste?.volume!,
        this.valuesR  [i]
      );
      this.createAlarmService.$ajustes.emit(ajusteN);
      this.closeModalService.$modalSettings.emit(false);
    }
    else{
      let ajusteN = new Ajuste(
        this.valuesN[i],
        this.ajuste?.volume!,
        this.ajuste?.notificarCada!
      );
      this.createAlarmService.$ajustes.emit(ajusteN);
      this.closeModalService.$modalSettings.emit(false);
    }
  }

  closeModal() {
    this.closeModalService.$modalSettings.emit(false);
  }
}
