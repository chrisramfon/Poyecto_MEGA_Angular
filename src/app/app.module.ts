//Librerias
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

//Componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ClienteComponent } from './cliente/cliente.component';
import { InicioclientesComponent } from './inicioclientes/inicioclientes.component';
import { EmpleadoinicioComponent } from './empleadoinicio/empleadoinicio.component';
import { IniciocitasComponent } from './iniciocitas/iniciocitas.component';
import { CitaComponent } from './cita/cita.component';

//Servicios
import {IniciosesionService} from './servicios/iniciosesion.service';
import {ClienteService} from './servicios/cliente.service';
import {EmpleadoService} from './servicios/empleado.service';
import {InicioclienteService} from './servicios/iniciocliente.service';
import {EmpleadoinicioService} from './servicios/empleadoinicio.service';
import {IniciocitasService} from './servicios/iniciocitas.service';
import {CitaService} from './servicios/cita.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent,
    EmpleadoComponent,
    ClienteComponent,
    InicioclientesComponent,
    EmpleadoinicioComponent,
    IniciocitasComponent,
    CitaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [//Servicios 
    IniciosesionService,
    ClienteService,
    EmpleadoService,
    InicioclienteService,
    EmpleadoinicioService,
    IniciocitasService,
    CitaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
