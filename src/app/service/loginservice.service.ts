import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(  private http:HttpClient ) { }



  loggedIn(data: any){
    let url = 'http://blog-module.herokuapp.com/signIn';
    return this.http.post(url, data);
  }




}
