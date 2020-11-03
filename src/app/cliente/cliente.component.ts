import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../servicios/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
clientes;
cliente={
  IDcli:"",
  Nombre:"",
  Apellido1:"",
  Apellido2:"",
  Direccion:"",
  Telefono:"",
  Estado:"",
  Usu:"",
  Pass:"",
  Tipo:""
}
  constructor(private clienteServicio:ClienteService) { }

  ngOnInit(): void {
  }

  limpiarCli(){
    this.cliente.IDcli=""
    this.cliente.Nombre=""
    this.cliente.Apellido1=""
    this.cliente.Apellido2=""
    this.cliente.Direccion=""
    this.cliente.Telefono=""
    this.cliente.Estado=""
    this.cliente.Usu=""
    this.cliente.Pass=""
    this.cliente.Tipo=""
  }

  guardarCli(){
    this.clienteServicio.guardarCli(this.cliente).subscribe(res =>{
      //realizaremos un mensaje que nos indique que guardamos el usuario
      alert("Usuario registrado")
      this.limpiarCli()
      this.consultartodoCli()
    },
    //esto es para si hay un error solo lo muestre en consola
    err => console.log(err)
    )

  }
  modificarCli(){
    this.clienteServicio.modificarCli(this.cliente).subscribe(res =>{
      alert("Usuario modificado")
      this.limpiarCli()
      this.consultartodoCli()
    },
    err => console.log(err)
    )
  }
  eliminarUsu(){
    this.clienteServicio.eliminarCli(this.cliente).subscribe(res=>{
      alert("Registro eliminado")
      this.limpiarCli()
      this.consultartodoCli()
    }, err=> console.log(err))
  }
  buscarCli(){
    this.clienteServicio.buscarCli(this.cliente).subscribe(res =>{
      this.cliente = res
    },
    err => console.log(err)
    )
  }
  consultartodoCli(){
    this.clientes = this.clienteServicio.consultartodoCli()
  }
}
