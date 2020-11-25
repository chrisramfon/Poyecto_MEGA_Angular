import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
//Componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ClienteComponent } from './cliente/cliente.component';
//Servicios
import {IniciosesionService} from './servicios/iniciosesion.service';
import {ClienteService} from './servicios/cliente.service';
import {EmpleadoService} from './servicios/empleado.service';
import { MiscitasComponent } from './miscitas/miscitas.component'



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent,
    EmpleadoComponent,
    ClienteComponent,
    MiscitasComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [//Servicios 
    IniciosesionService,
    ClienteService,
    EmpleadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
