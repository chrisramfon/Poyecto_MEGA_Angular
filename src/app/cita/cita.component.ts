import { Component, OnInit } from '@angular/core';
import {CitaService} from '../servicios/cita.service';
import {EmpleadoinicioService} from '../servicios/empleadoinicio.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  cita = {id_cliente: "", id_cita: "", Estado: "", Empleado: ""};
  empleados;

  

  constructor(private servicioCita: CitaService, private servicioEmp: EmpleadoinicioService) { }

   //Elementos de owl-carousel
   title = 'owlcarouselinAngular';
   SlideOptions = { items: 1, dots: true, nav: true }; 
   //Fin de elementos owl-carousel

  ngOnInit(): void {
    this.buscarTodosEmpleados();
  }

  limpiarFormulario(){
    this.cita.id_cliente = "";
    this.cita.id_cita = "";
    this.cita.Estado = "";
  }

    //Modificación de cliente
   modificarCita(){
     this.servicioCita.modificarCita(this.cita).subscribe(res=>{
      alert("Cita modificada");
      this.limpiarFormulario();
     }, err=>{console.log(err)});
   }

      //Buscar todos los clientes
  buscarTodosEmpleados(){
    this.empleados = this.servicioEmp.consultarTodosEmpleados();
  }//Fin de buscar todos los clientes

}
