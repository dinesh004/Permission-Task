import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PermiService } from '../service/permi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newUserClicked = false
  myForm!: FormGroup;


  users = [
    {name: 'Dinesh', role: 'Web Developer', view: false, add: true, edit: false, delete: true},
    {name: 'Virat', role: 'Python Developer', view: true, add: false, edit: true, delete: false},
    {name: 'Rahul', role: 'Java Developer', view: false, add: true, edit: false, delete: true}
  ]

  constructor(
     private formBuilder: FormBuilder,
     private http: HttpClient,
     private service: PermiService) { }


  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      userName: '',
      role: '',
      email: '',
      password: ''
    })
  }


  perName = [
    "View",
    "Add",
    "Edit",
    "Delete"
  ];


  model: any= {
    name: '',
      role: '',
      email: '',
      password: '',
  };
  model2: any= {};



  addUser(){
    console.log(this.model);
    this.users.push(this.model);
    // this.model = {}
    const perm=[]

    const payload={
      userName: this.model.name,
      role: this.model.role,
      email: '',
      password: '',
      permissions:{
        party:[
          this.model.view?1:0,
          this.model.add?1:0,
          this.model.edit?1:0,
          this.model.delete?1:0
        ],
      }
    }
    this.service.getPermissions(payload).subscribe((response: any)=>{
      console.log(response);
    })
    console.log(payload);
  }




  onChangeCheck($event: any){
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    console.log(id, isChecked);
  }


  deleteUser(i:any){
    this.users.splice(i, 1);
    console.log(i);
  }


  myValue: any;
  editUser(editUserInfo: any){
    this.model2.name = this.users[editUserInfo].name;
    this.model2.role = this.users[editUserInfo].role;
    this.model2.view = this.users[editUserInfo].view;
    this.model2.add = this.users[editUserInfo].add;
    this.model2.edit = this.users[editUserInfo].edit;
    this.model2.delete = this.users[editUserInfo].delete;
    this.myValue = editUserInfo;
  }


  updateUser(){
    let editUserInfo = this.myValue;
    for (let i = 0; i < this.users.length; i++) {
      if (i==editUserInfo){
        this.users[i] = this.model2;
        this.model2 = {}
        }
    }
  }


  addNewUserBtn(){
    this.newUserClicked = !this.newUserClicked;
  }




}


