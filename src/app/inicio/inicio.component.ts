import { Component, OnInit } from '@angular/core';
import {IniciosesionService} from '../servicios/iniciosesion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
<<<<<<< HEAD

  usuario={
    usuario:"",
    pass:""
  }

  constructor(private iniciosesion:IniciosesionService, private router:Router) { }
=======
  title = 'owlcarouselinAngular';  
  Images = ['../assets/images/Carousel1.jpeg', '../assets/images/Carousel2.jpeg', '../assets/images/Carousel3.jpeg'];  
  
  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true };  
  constructor() { }
>>>>>>> 8726b8940a9ebbddcc7491d6fe0d681b1c900b2d

  ngOnInit(): void {
  }

  login(){
    this.iniciosesion.login(this.usuario).subscribe(
      res=>{
        console.log(res)

        const datos = res.envio.split(",")
        localStorage.setItem('token',datos[0])
        localStorage.setItem('nombre',datos[1])
        localStorage.setItem('tipo',datos[2])
        alert("Bienvenid@"+ datos[1])

        this.iniciosesion.eslogueado();
        this.iniciosesion.tipousu();
        this.router.navigate(['/catalogo'])
      },
      err =>{
        console.log(err)
        alert("Error al iniciar sesión")
      }
    )
  }
}
