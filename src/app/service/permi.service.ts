import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermiService {

  constructor(private http:HttpClient) { }


  getPermissions(){
    let url = 'https://blog-module.herokuapp.com/signUp';
    return this.http.get(url);
  }
}
