import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IniciosesionService {

  private url_login="http://localhost:3000/usuarios/iniciosesion"

@Output() change: EventEmitter<boolean> = new EventEmitter();
@Output() change1: EventEmitter<String> = new EventEmitter();

  constructor(private http:HttpClient) { }

  login(usuario){
    return this.http.post<any>(this.url_login,usuario);
  }

  eslogueado(){
    this.change.emit(!!localStorage.getItem('token'))
    return !!localStorage.getItem('token')
  }

  tipousu(){
    this.change1.emit(localStorage.getItem('tipo'))
    return localStorage.getItem('tipo')
  }
}
