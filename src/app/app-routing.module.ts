import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { InicioComponent } from './inicio/inicio.component';
import {LoginComponent} from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';

//Guardias
import { GuardiaLoginGuard } from './guardia-login.guard';
import { GuardiaTipousuGuard} from './guardia-tipousu.guard';

const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'cliente', component:ClienteComponent, canActivate:[GuardiaLoginGuard,GuardiaTipousuGuard]},
  {path:'empleado', component:EmpleadoComponent, canActivate:[GuardiaLoginGuard,GuardiaTipousuGuard]},
  //Rutas por defecto, dejar al final
  {path:'',redirectTo:'inicio', pathMatch:'full'},
  {path:'**', redirectTo:'inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
