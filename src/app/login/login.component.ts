import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../service/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private service: LoginserviceService
  ) {}


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }


  submit() {
    this.service.loggedIn(this.form.value).subscribe((response: any)=>{
      if (response.status == false){
        alert(response.message);
        return false;
      }
       localStorage.setItem('token', response.Data.token);
        this.router.navigate(['/home']);

    }
    ,(error)=>{
      alert('please check your email and password');
    }
    )
  }
}
