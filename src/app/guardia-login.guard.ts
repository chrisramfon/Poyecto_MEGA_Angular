import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {IniciosesionService} from './servicios/iniciosesion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardiaLoginGuard implements CanActivate {
  
  constructor(private router:Router, private iniciosesion:IniciosesionService){}
  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/
 
  canActivate(): boolean{
    if(this.iniciosesion.eslogueado()){
      return true
    }else{
      this.router.navigate(['/inicio'])
      return false
    }
  }
}
