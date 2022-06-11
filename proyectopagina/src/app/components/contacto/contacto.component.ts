import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/models/Contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactoForm: FormGroup;
  regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  regexNumero = /^[0-9]+$/;
  titulo_formulario = 'Crear contacto'
  id: string|null;

  constructor(private fb: FormBuilder, private router: Router, private _contactoService: ContactoService, private idRoute:ActivatedRoute) {
    this.contactoForm = this.fb.group({
      Nombre: ["", Validators.required],
      Edad: ["", [Validators.required, Validators.pattern(this.regexNumero)]],
      Celular: ["", [Validators.required, Validators.pattern(this.regexNumero)]],
      Email: ["", [Validators.required, Validators.pattern(this.regexEmail)]],


    });
    this.id = this.idRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.accionSolicitada();
  }
  alimentarContacto() {
    console.log(this.contactoForm)
    console.log(this.contactoForm.get('contacto')?.value);

    const CONTACTO: Contacto = {
      Nombre: this.contactoForm.get('Nombre')?.value,
      Edad: this.contactoForm.get('Edad')?.value,
      Celular: this.contactoForm.get('Celular')?.value,
      Email: this.contactoForm.get('Email')?.value,

    }
    if (this.id !==null) {
      console.log(this.id)
      this._contactoService.putContacto(this.id, CONTACTO).subscribe(data=>{
        console.log(data)

        Swal.fire({
          title: '¡Contacto Actualizado!',
          text: 'Se guardaron los cambios en el producto',
          icon: 'success',
          confirmButtonText: 'Vale'
        })
      }, error =>{
        console.log(error)
      }
      )
    } else {
      this._contactoService.postContacto(CONTACTO).subscribe(data => {
        this.router.navigate(['/']);
        Swal.fire({
          title: '¡Éxito!',
          text: 'El registro se creó correctamente',
          icon: 'success',
          confirmButtonText: 'Confirmar'
        })
      }, error => {
        console.log(error);
      })
    }

  }

accionSolicitada(){
  if(this.id !==null){
    this.titulo_formulario = "Editar contacto";
    this._contactoService.getContacto(this.id).subscribe(data=>{
      this.contactoForm.setValue({
        Nombre: data.Nombre,
        Edad: data.Edad,
        Celular: data.Celular,
        Email: data.Email
      })
    })
  }
}



}
