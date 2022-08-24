import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PermiService } from 'src/app/service/permi.service';
import { PermissionGuard } from 'src/app/service/permission.guard';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  model2: any= {};
  newUserClicked = false
  myForm!: FormGroup;


  add:boolean = false;
  edit:boolean = false;
  delete:boolean = false;


  hidden = false;
  users = [
    {name: 'Dinesh', role: 'Web Developer', view: false, add: true, edit: false, delete: true},
    {name: 'Virat', role: 'Python Developer', view: true, add: false, edit: true, delete: false},
    {name: 'Rahul', role: 'Java Developer', view: false, add: true, edit: false, delete: true}
  ]
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private service: PermiService,
    public permissionGuard: PermissionGuard) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      userName: '',
      role: '',
      email: '',
      password: ''
    })


    // if(this.permissionGuard.accessAddRights('blog')){
    //   this.add = false;

    // }
    // else{
    //   this.add = true;
    // }

    // if(this.permissionGuard.accessEditRights('blog')){
    //   this.disabled = false;

    // }
    // else{
    //   this.disabled = true;
    // }

    // if(this.permissionGuard.accessDelRights('blog')){
    //   this.disabled = false;

    // }
    // else{
    //   this.disabled = true;
    // }
    this.addUser1()
    this.editUser1()
    this.deleteUser1()

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




  addUser(){


    this.users.push(this.model);
    // this.model = {}
    const perm=[]

    const payload={
      userName: this.model.name,
      role: this.model.role,
      email: this.model.email,
      password: this.model.password,
      permissions:{
        blog:[
          this.model.view?1:0,
          this.model.add?1:0,
          this.model.edit?1:0,
          this.model.delete?1:0
        ],
        toDoList:[
          this.model.view1?1:0,
          this.model.add2?1:0,
          this.model.edit3?1:0,
          this.model.delete4?1:0
        ]
      }
    }
    this.service.getPermissions(payload).subscribe((response: any)=>{
      console.log(response);
    })
    console.log(payload);



  }



  deleteUser(i:any){
    this.users.splice(i, 1);
    console.log(i);
    // if(this.permissionGuard.accessDelRights('blog')){
    //   this.disabled = false;
    // }
    // else{
    //   this.disabled = true;
    // }

  }

  deleteUser1(){
    if(this.permissionGuard.accessDelRights('toDoList')){
      this.delete = false;

    }
    else{
      this.delete = true;
    }
  }

  onChangeCheck($event: any){
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    console.log(id, isChecked);
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
    // if(this.permissionGuard.accessEditRights('blog')){
    //   this.disabled = false;
    // }
    // else{
    //   this.disabled = true;
    // }
  }


  editUser1(){
    if(this.permissionGuard.accessEditRights('toDoList')){
      this.edit = false;
    }
    else{
      this.edit = true;
    }
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


    addUser1(){
      if(this.permissionGuard.accessAddRights('toDoList')){
        this.add = false;

      }
      else{
        this.add = true;
      }
    }
  }






