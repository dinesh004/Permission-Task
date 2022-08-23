import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (localStorage.getItem('token')){
      let permission = localStorage.getItem('user');
      permission =JSON.parse(permission);
      console.log(permission);
      let values = [];
      let moduleName = route.data["moduleName"];
      console.log(moduleName);

      let keys = Object.keys(permission);
      keys.forEach(key => {

        if(key == moduleName){
          values = permission[key];
          console.log(values);
        }
      })

      if(values[0] == 1){
        return true;
      } else{
        // this.router.navigate(['/']);
        alert("You don't have permission to access this page");
        return false;
      }


      // if (moduleName.length == 1){
      //   switch (moduleName[0]){
      //     case "blog":
      //       if(values.includes("blog"))return true;
      //       else{
      //         this.router.navigate(['/home']);
      //         return false;
      //       }

      //   }
      // }
    return true;

    }




  }

  accessAddRights(moduleName):Boolean{
    if (localStorage.getItem('token')){
      let permission = localStorage.getItem('user');
      permission =JSON.parse(permission);
      console.log(permission);
      let values = [];
      // let moduleName = route.data["moduleName"];
      console.log(moduleName);

      let keys = Object.keys(permission);
      keys.forEach(key => {

        if(key == moduleName){
          values = permission[key];
          console.log(values);
        }
      })

      if(values[1] == 1){
        return true;
      } else{
        // this.router.navigate(['/']);
        // alert("You don't have permission to access this page");
        return false;
      }


  }




}

accessEditRights(moduleName):Boolean{
  if (localStorage.getItem('token')){
    let permission = localStorage.getItem('user');
    permission =JSON.parse(permission);
    console.log(permission);
    let values = [];
    // let moduleName = route.data["moduleName"];
    console.log(moduleName);

    let keys = Object.keys(permission);
    keys.forEach(key => {

      if(key == moduleName){
        values = permission[key];
        console.log(values);
      }
    })

    if(values[2] == 1){
      return true;
    } else{
      // this.router.navigate(['/']);
      // alert("You don't have permission to access this page");
      return false;
    }


}
}

accessDelRights(moduleName):Boolean{
  if (localStorage.getItem('token')){
    let permission = localStorage.getItem('user');
    permission =JSON.parse(permission);
    console.log(permission);
    let values = [];
    // let moduleName = route.data["moduleName"];
    console.log(moduleName);

    let keys = Object.keys(permission);
    keys.forEach(key => {

      if(key == moduleName){
        values = permission[key];
        console.log(values);
      }
    })

    if(values[3] == 1){
      return true;
    } else{
      // this.router.navigate(['/']);
      // alert("You don't have permission to access this page");
      return false;
    }


}
}
}
