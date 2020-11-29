import { Component, OnInit } from '@angular/core';
import {EmpleadoinicioService} from '../servicios/empleadoinicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleadoinicio',
  templateUrl: './empleadoinicio.component.html',
  styleUrls: ['./empleadoinicio.component.css']
})
export class EmpleadoinicioComponent implements OnInit {

  empleados;
  p: number = 1;

  constructor(private inicioServicio: EmpleadoinicioService, private router: Router) { }

  ngOnInit(): void {
    this. buscarTodosEmpleados();
  }

  //Elementos de owl-carousel
  title = 'owlcarouselinAngular';
  SlideOptions = { items: 1, dots: true, nav: true }; 
  //Fin de elementos owl-carousel

  //Buscar todos los clientes
  buscarTodosEmpleados(){
    this.empleados = this.inicioServicio.consultarTodosEmpleados();
  }//Fin de buscar todos los clientes

  operaciones(){
    this.router.navigate(['empleado']);
  }

}
