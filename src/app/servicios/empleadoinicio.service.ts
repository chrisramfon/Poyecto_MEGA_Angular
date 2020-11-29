import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoinicioService {
  private url="http://localhost:3000/empleado";

  constructor(private http: HttpClient) { }

  //Consultar todos los empleados
  consultarTodosEmpleados(){
    return this.http.get<any>(this.url);
  }
}
