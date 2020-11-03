import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//Componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
//Servicios
import {IniciosesionService} from './servicios/iniciosesion.service';
import {ClienteService} from './servicios/cliente.service';
import {EmpleadoService} from './servicios/empleado.service'
import { EmpleadoComponent } from './empleado/empleado.component';
import { ClienteComponent } from './cliente/cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent,
    EmpleadoComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [//Servicios 
    IniciosesionService,
    ClienteService,
    EmpleadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
