import { Component, OnInit } from '@angular/core';
import {InicioclienteService} from '../servicios/iniciocliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicioclientes',
  templateUrl: './inicioclientes.component.html',
  styleUrls: ['./inicioclientes.component.css']
})
export class InicioclientesComponent implements OnInit {

  clientes;
  p: number = 1;

  constructor(private inicioServicio: InicioclienteService, private router:Router) { }

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

  operaciones(){
    this.router.navigate(['cliente']);
  }

}
