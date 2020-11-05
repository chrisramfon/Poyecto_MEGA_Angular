import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IniciosesionService {

  private url_login="http://localhost:3000/usuario/inicio"

@Output() change: EventEmitter<boolean> = new EventEmitter();
@Output() change1: EventEmitter<String> = new EventEmitter();

  constructor(private http:HttpClient) { }

  login(usuario){
    return this.http.post<any>(this.url_login,usuario);
    //alert(usuario.Usuario+" "+usuario.Contrasena)
  }

  eslogueado(){
    this.change.emit(!!localStorage.getItem('token'))
    return !!localStorage.getItem('token')
  }

  tipousu(){
    this.change1.emit(localStorage.getItem('Tipo'))
    return localStorage.getItem('Tipo')
  }
}
