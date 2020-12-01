import { Component, OnInit } from '@angular/core';
import {IniciocitasService} from '../servicios/iniciocitas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-iniciocitas',
  templateUrl: './iniciocitas.component.html',
  styleUrls: ['./iniciocitas.component.css']
})
export class IniciocitasComponent implements OnInit {

  clientes;
  p: number = 1;
  n: number = 1;

  constructor(private inicioServicio: IniciocitasService, private router:Router) { }

  ngOnInit(): void {
    this.buscarTodosClientes();
  }
  
  //Elementos de owl-carousel
  title = 'owlcarouselinAngular';
  SlideOptions = { items: 1, dots: true, nav: true }; 
  //Fin de elementos owl-carousel

  //Buscar todos los clientes
  buscarTodosClientes(){
    this.clientes = this.inicioServicio.consultarTodosClientes();
  }//Fin de buscar todos los clientes


  cita(){
    this.router.navigate(['cita']);
  }
}
