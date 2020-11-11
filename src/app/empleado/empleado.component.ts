import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from '../servicios/empleado.service';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleados;
  usuarios;
  empleado={
    id:"",
    Nombre:"",
    Apellido1:"",
    Apellido2:"",
    Direccion:"",
    Telefono:"",
    Estado:""
  }
  usuario={
    id:"",
    Usuario:"",
    Contrasena:"",
    Tipo:"E"
  }
  constructor(private empleadoServicio:EmpleadoService) { }

  ngOnInit(): void {
  }

  limpiarEmp(){
    this.empleado.id=""
    this.empleado.Nombre=""
    this.empleado.Apellido1=""
    this.empleado.Apellido2=""
    this.empleado.Direccion=""
    this.empleado.Telefono=""
    this.empleado.Estado=""
    this.usuario.Usuario="",
    this.usuario.Contrasena=""
  }

  guardarUsu(){
    this.usuario.id=this.empleado.id
    this.empleadoServicio.guardarUsu(this.usuario).subscribe(res =>{
      //realizaremos un mensaje que nos indique que guardamos el usuario
      alert("Usuario registrado")
      /*this.limpiarEmp()
      this.consultartodoEmp()*/
    },
    //esto es para si hay un error solo lo muestre en consola
    err => console.log(err)
    )

  }

  guardarEmp(){
    this.empleadoServicio.guardarEmp(this.empleado).subscribe(res =>{
      //realizaremos un mensaje que nos indique que guardamos el usuario
      alert("Usuario registrado")
      this.limpiarEmp()
      this.consultartodoEmp()
    },
    //esto es para si hay un error solo lo muestre en consola
    err => console.log(err)
    )

  }
  modificarEmp(){
    this.empleadoServicio.modificarEmp(this.empleado).subscribe(res =>{
      alert("Usuario modificado")
      this.limpiarEmp()
      this.consultartodoEmp()
    },
    err => console.log(err)
    )
  }
  eliminarEmp(){
    this.empleadoServicio.eliminarEmp(this.empleado).subscribe(res=>{
      alert("Registro eliminado")
      this.limpiarEmp()
      this.consultartodoEmp()
    }, err=> console.log(err))
  }
  buscarEmp(){
    this.empleadoServicio.buscarEmp(this.empleado).subscribe(res =>{
     // this.empleado = res
    },
    err => console.log(err)
    )
  }
  consultartodoEmp(){
    this.empleados = this.empleadoServicio.consultartodoEmp()
    
  }

}
