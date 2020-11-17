import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../servicios/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  tabla;
  clientes;
  cliente = {id: "", Nombre: "", Apellido1: "", Apellido2: "", Direccion: "", Telefono: "", Estado: ""};
  usuario = {id: "", Usuario: "", Contrasena: "", Tipo: "C"};

  constructor(private clienteServicio:ClienteService) { }


  //Elementos de owl-carousel
  title = 'owlcarouselinAngular';
  SlideOptions = { items: 1, dots: true, nav: true }; 
  //Fin de elementos owl-carousel


  ngOnInit(): void {
  }


  //Quitar los datos del formulario
  limpiarFormulario(){
    this.cliente.id = "";
    this.cliente.Nombre = "";
    this.cliente.Apellido1 = "";
    this.cliente.Apellido2 = "";
    this.cliente.Direccion = "";
    this.cliente.Telefono = "";
    this.cliente.Estado = "";
    this.usuario.id = "";
    this.usuario.Usuario = "";
    this.usuario.Contrasena = "";
  }
  

  //Metodo para guardar un cliente
  guardarCliente(){
    this.clienteServicio.guardarCliente(this.cliente).subscribe(res=>{
      alert("Cliente registrado");
      this.limpiarFormulario();
    }, err=> console.log(err));
  }//Fin de guardar cliente


  //Metodo para guardar el usuario
  guardarUsuario(){
    this.usuario.id = this.cliente.id;
    this.clienteServicio.guardarUsuario(this.usuario).subscribe(res=>{
      alert("Usuario creado con éxito");
    }, err=>console.log(err));
  }

  //Modificación de cliente
  modificarCliente(){
    this.clienteServicio.modificarCliente(this.cliente).subscribe(res=>{
      alert("Cliente modificado");
      this.limpiarFormulario();
    }, err=>{console.log(err)});
  }//Fin de modificar cliente


  //Buscar todos los clientes
  buscarTodosClientes(){
    this.clientes = this.clienteServicio.consultarTodosClientes();
    this.tabla = true;
  }//Fin de buscar todos los clientes


  //Eliminar cliente
  eliminarCliente(){
    this.clienteServicio.eliminarCliente(this.cliente).subscribe(res=>{
      alert("Cliente eliminado");
      this.limpiarFormulario();
    }, err=>console.log(err));
  }//Fin de eliminar cliente


  //Buscar un solo cliente
  consultarCliente(){
  this.clienteServicio.consultarCliente(this.cliente).subscribe(res=>{
    this.cliente = res;
  }, err=>console.log(err));
  }//Fin de consultar cliente
}
