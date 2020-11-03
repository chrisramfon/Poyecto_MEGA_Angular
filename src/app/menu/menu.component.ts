import { Component, HostBinding, OnInit } from '@angular/core';
import {IniciosesionService} from '../servicios/iniciosesion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

@HostBinding('class.is-open')

entro=false;
tipo=""
  constructor(private iniciosesion:IniciosesionService) { }

  ngOnInit(): void {
    this.iniciosesion.change.subscribe(isOpen =>{
      this.entro=isOpen;
    })

    this.entro=this.iniciosesion.eslogueado();
    this.tipo=this.iniciosesion.tipousu();
  }

  cerrarsesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('Nombre');
    localStorage.removeItem('tipo');
    this.entro = this.iniciosesion.eslogueado();
  }

}
