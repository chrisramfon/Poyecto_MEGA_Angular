import { Component, OnInit } from '@angular/core';
import {IniciosesionService} from '../servicios/iniciosesion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario={
    Usuario:"",
    Contrasena:""
  }

  constructor(private iniciosesion:IniciosesionService, private router:Router) { }
  //Elementos de owl-carousel
  title = 'owlcarouselinAngular';  
  Images = ['../assets/images/Carousel1.jpeg', '../assets/images/Carousel2.jpeg', '../assets/images/Carousel3.jpeg'];  

  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true };  
  //Fin de elementos owl-carousel

  ngOnInit(): void {
  }

  login(){
    this.iniciosesion.login(this.usuario).subscribe(
      res=>{
        console.log(res)

        const datos = res.envio.split(",")
        localStorage.setItem('token',datos[0])
        localStorage.setItem('Usuario',datos[1])
        localStorage.setItem('Tipo',datos[2])
        alert("Bienvenid@"+ datos[1])

        this.iniciosesion.eslogueado();
        this.iniciosesion.tipousu();
        this.router.navigate(['/cliente'])
      },
      err =>{
        console.log(err)
        alert("Error al iniciar sesión")
      }
    )
  }
}
