import { Injectable } from '@angular/core';
//import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //private urlCli="http://localhost:3000/cliente"
  constructor() { }

  /*guardarCli(cliente){
    return this.http.post<any>(this.urlCli,cliente)
  }
  modificarCli(cliente){
    return this.http.put<any>(this.urlCli,cliente)
  }
  eliminarCli(cliente){
    return this.http.post(this.urlCli+"/borrar",cliente)
  }
  buscarCli(cliente){
    return this.http.get<any>(this.urlCli+"/"+cliente.IDcli)
  }
  consultartodoCli(){
    return this.http.get<any>(this.urlCli)
  }*/
}
