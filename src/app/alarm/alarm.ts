export class Alarm {
  nombre:string;
  tipo:string;
  fecha:string;
  contactList:Array<string>;

  constructor(nombre:string,tipo:string,
    fecha:string,
    contactList:Array<string>){
    this.nombre=nombre;
    this.contactList=contactList;
    this.fecha=fecha;
    this.tipo=tipo;
  }

}
