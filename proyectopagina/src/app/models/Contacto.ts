export class Contacto{
  _id?: string;
  Nombre: string;
  Edad: number;
  Celular: number;
  Email: string;


  constructor(Nombre:string, Edad:number, Celular:number, Email:string){
      this.Nombre = Nombre
      this.Edad = Edad
      this.Celular = Celular
      this.Email = Email
  }
}
