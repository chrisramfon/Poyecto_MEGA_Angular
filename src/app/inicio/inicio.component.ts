import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  title = 'owlcarouselinAngular';  
  Images = ['../assets/images/Carousel1.jpeg', '../assets/images/Carousel2.jpeg', '../assets/images/Carousel3.jpeg'];  
  
  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true };  
  constructor() { }

  ngOnInit(): void {
  }

}
