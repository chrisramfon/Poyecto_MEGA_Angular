import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { InicioComponent } from './inicio/inicio.component';
import {LoginComponent} from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { InicioclientesComponent } from './inicioclientes/inicioclientes.component';
import { EmpleadoinicioComponent } from './empleadoinicio/empleadoinicio.component';

//Guardias
import { GuardiaLoginGuard } from './guardia-login.guard';
import { GuardiaTipousuGuard} from './guardia-tipousu.guard';

const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'cliente', component:ClienteComponent},
  {path:'empleado', component:EmpleadoComponent},
  {path:'inicioclientes', component:InicioclientesComponent},
  {path:'inicioempleados', component:EmpleadoinicioComponent},
  //Rutas por defecto, dejar al final
  {path:'',redirectTo:'inicio', pathMatch:'full'},
  {path:'**', redirectTo:'inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
