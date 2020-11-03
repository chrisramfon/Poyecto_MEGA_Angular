import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
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
<<<<<<< HEAD
    InicioComponent,
    LoginComponent,
    EmpleadoComponent,
    ClienteComponent
=======
    InicioComponent
    
>>>>>>> 8726b8940a9ebbddcc7491d6fe0d681b1c900b2d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule
  ],
  providers: [//Servicios 
    IniciosesionService,
    ClienteService,
    EmpleadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
