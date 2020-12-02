import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url="http://localhost:3000/cliente"
  private url_usuario = "http://localhost:3000/usuario";
  constructor(private http: HttpClient) { }

  //Registro de usuario
  guardarUsuario(usuario){
    return this.http.post<any>(this.url_usuario, usuario);
  }

 //Registro de cliente
 guardarCliente(cliente){
 return this.http.post<any>(this.url, cliente);
 }


 //Modificación de cliente
 modificarCliente(cliente){
   return this.http.put<any>(this.url, cliente);
 }

 consultarUsu(usuario){
  return this.http.get<any>(this.url_usuario+"/"+usuario.id)
}
 //Consultar un solo cliente
 consultarCliente(cliente){
  return this.http.get<any>(this.url+"/"+cliente.id);
 }


 //Consultar todos los clientes
 consultarTodosClientes(){
   return this.http.get<any>(this.url);
 }


 //Eliminar cliente
 eliminarCliente(cliente){
  return this.http.post(this.url+"/eliminar", cliente);
 }
}
