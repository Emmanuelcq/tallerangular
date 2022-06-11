import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/Contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  url = "http://localhost:4000/api"
  constructor(private http: HttpClient) { }
  getContactos(): Observable<any> {
    return this.http.get(`${this.url}/obtener-lista-contactos`);

  }
  getContacto(id: String): Observable<any> {
    return this.http.get(`${this.url}/obtener-contacto/${id}`);

  }
  deleteContacto(id: String): Observable<any> {
    return this.http.delete(`${this.url}/borrar-contacto/${id}`)
  }

  postContacto(contacto: Contacto): Observable<any> {
    return this.http.post(`${this.url}/crear-contacto`, contacto);
  }

putContacto(id:String, contacto: Contacto):Observable<any>{
  return this.http.put(`${this.url}/actualizar-contacto/${id}`, contacto )
}


}
