import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private urlEmp="http://localhost:3000/empleado"
  constructor(private http:HttpClient) { }

  guardarEmp(empleado){
    return this.http.post<any>(this.urlEmp,empleado)
  }
  modificarEmp(empleado){
    return this.http.put<any>(this.urlEmp,empleado)
  }
  eliminarEmp(empleado){
    return this.http.post(this.urlEmp+"/borrar",empleado)
  }
  buscarEmp(empleado){
    return this.http.get<any>(this.urlEmp+"/"+empleado.IDem)
  }
  consultartodoEmp(){
    return this.http.get<any>(this.urlEmp)
  }
}
