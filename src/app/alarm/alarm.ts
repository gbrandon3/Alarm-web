export class Alarm {
  nombre: string;
  tipo: string;
  fecha: string;
  contactList: Array<string>;
  id:number;
  ajuste:Ajuste
  descripcion:string
  lugar:string
  constructor(
    nombre: string,
    tipo: string,
    fecha: string,
    contactList: Array<string>,
    ajuste:Ajuste,
    descripcion='',
    lugar='',

  ) {
    this.nombre = nombre;
    this.contactList = contactList;
    this.fecha = fecha;
    this.tipo = tipo;
    this.ajuste=ajuste
    this.descripcion=descripcion
    this.lugar=lugar
  }
}
export class Ajuste {
  notificarAntes: string;
  sonido: string;
  volume: number;
  notificarCada: string;
  constructor(
    notificarAntes: string,

    volume: number,
    notificarCada: string,
    sonido = 'Sonido 1'
  ) {
    this.notificarAntes = notificarAntes;
    this.sonido = sonido;
    this.volume = volume;
    this.notificarCada = notificarCada;
  }
}
export class AlarmEvent {
  nombre: string;
  fecha: string;
  lugar: string;
  contactList: string[];
  description: string;
  ajuste: Ajuste;
  constructor(
    nombre: string,
    fecha: string,
    lugar: string,
    ajuste: Ajuste,
    contactList: string[],
    description = '',

  ) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.lugar = lugar;
    this.contactList = contactList;
    this.ajuste = ajuste;
    this.description = description;
  }
}
