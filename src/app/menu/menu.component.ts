import { Component, HostBinding, OnInit } from '@angular/core';
import {IniciosesionService} from '../servicios/iniciosesion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  colapsado = true;
@HostBinding('class.is-open')

entro=false;
Tipo="E"
  constructor(private iniciosesion:IniciosesionService) { }

  ngOnInit(): void {
    this.iniciosesion.change.subscribe(isOpen =>{
      this.entro=isOpen;
    })
    this.iniciosesion.change1.subscribe(isOpen =>{
      this.Tipo=isOpen;
    })
    this.entro=this.iniciosesion.eslogueado();
    this.Tipo=this.iniciosesion.tipousu();
  }

  cerrarsesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('Usuario');
    localStorage.removeItem('Tipo');
    this.entro = this.iniciosesion.eslogueado();
  }

  colapsar(){
    if(this.colapsado==true){
      this.colapsado = false;
    }else{
      this.colapsado = true;
    }
  }

}
