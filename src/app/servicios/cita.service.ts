import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private url = "http://localhost:3000/cliente/modificarcita";
  private urlemp="http://localhost:3000/empleado";

  constructor(private http: HttpClient) { }


   //Modificación de cliente
 modificarCita(cita){
   return this.http.put<any>(this.url, cita);
 }

  //Consultar todos los empleados
  consultarTodosEmpleados(){
    return this.http.get<any>(this.urlemp);
  }
 
}
