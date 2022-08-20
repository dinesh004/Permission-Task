import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginserviceService } from './loginservice.service';
import { PermiService } from './permi.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginservice:LoginserviceService,
     private permiservice: PermiService,
     private router:Router ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // let Permission = localStorage.getItem('token');
      // console.log(Permission);




if (localStorage.getItem('token')){
  return true;
}else{
  return false;
}

}





}

