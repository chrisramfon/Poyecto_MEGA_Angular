import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InicioclienteService {
  private url="http://localhost:3000/cliente";

  constructor(private http: HttpClient) { }

  //Consultar todos los clientes
  consultarTodosClientes(){
    return this.http.get<any>(this.url);
  }
}
