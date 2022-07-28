import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PermiService } from '../service/permi.service';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  msg="add new user";
  newUserClicked = false
  myForm!: FormGroup;


  users = [
    {name: 'Dinesh', role: 'Web Developer', view: false, add: true, edit: false, delete: true},
    {name: 'Virat', role: 'Python Developer', view: true, add: false, edit: true, delete: false},
    {name: 'Rahul', role: 'Java Developer', view: false, add: true, edit: false, delete: true}
  ]

  text = '';


  constructor(
     private formBuilder: FormBuilder,
     private http: HttpClient,
     private service: PermiService,
     private shared: SharedDataService) {
      }


  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      userName: '',
      role: '',
      email: '',
      password: ''
    })
  }


  updateText(text){
    this.shared.updateData(text);
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


  addNewUserBtn(){
    this.newUserClicked = !this.newUserClicked;
  }

  // enteredText: string = '';
  // onBtnClick(){
  //   // console.log(this.enteredText);
  //   this.shared.raiseDataEmitterEvent(this.enteredText);

  // }
}


