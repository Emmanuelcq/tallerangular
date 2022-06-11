import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Contacto } from 'src/app/models/Contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resumen-contactos',
  templateUrl: './resumen-contactos.component.html',
  styleUrls: ['./resumen-contactos.component.css']
})
export class ResumenContactosComponent implements OnInit {



  constructor(private _contactoService: ContactoService) { }

  listContactos: Contacto[]=[];

  ngOnInit(): void {
    this.traerContactos();
}

traerContactos(){
  this._contactoService.getContactos().subscribe(data=>{
    console.log(data);
    this.listContactos= data
  }, error=>{
    console.log(error)
  })
}

deleteContacto(id:any){
  Swal.fire({
    title: 'Está seguro que desea eliminar esta información',
    text: 'Esta acción no se podrá deshacer',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar'

  }).then((result)=>{
    if (result.isConfirmed){
      this._contactoService.deleteContacto(id).subscribe(data =>{
        Swal.fire(
          'Producto eliminado!',
          'success'
        );
        this.traerContactos();
      }, error=>{
        console.log(error)
      })
    }
  })
}

}
