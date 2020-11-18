import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private urlEmp="http://localhost:3000/empleado"
  private urlUsu="http://localhost:3000/usuario"

  constructor(private http:HttpClient) { }

  guardarUsu(usuario){
    return this.http.post<any>(this.urlUsu,usuario)
  }
  guardarEmp(empleado){
    return this.http.post<any>(this.urlEmp,empleado)
  }

  modificarUsu(usuario){
    return this.http.put<any>(this.urlUsu,usuario)
  }
  modificarEmp(empleado){
    return this.http.put<any>(this.urlEmp,empleado)
  }

  eliminarUsu(usuario){
    return this.http.post(this.urlUsu+"/borrar",usuario)
  }
  eliminarEmp(empleado){
    return this.http.post(this.urlEmp+"/borrar",empleado)
  }

  buscarUsu(usuario){
    return this.http.get<any>(this.urlUsu+"/"+usuario.id)
  }
  buscarEmp(empleado){
    return this.http.get<any>(this.urlEmp+"/"+empleado.id)
  }

  consultartodoUsu(){
    return this.http.get<any>(this.urlUsu)
  }
  consultartodoEmp(){
    return this.http.get<any>(this.urlEmp)
  }
}
