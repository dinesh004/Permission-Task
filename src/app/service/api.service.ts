import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

signin= 'https://blog-module.herokuapp.com/signIn';

permissions= 'https://blog-module.herokuapp.com/signUp';

getDataIn(){
  return this.http.get(this.signin);
}



perData(){
  return this.http.get(this.permissions);
}

}
