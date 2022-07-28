import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  model2: any= {};
  users = [
    {name: 'Dinesh', role: 'Web Developer', view: false, add: true, edit: false, delete: true},
    {name: 'Virat', role: 'Python Developer', view: true, add: false, edit: true, delete: false},
    {name: 'Rahul', role: 'Java Developer', view: false, add: true, edit: false, delete: true}
  ]
  constructor(private shared:SharedDataService) { }

  ngOnInit(): void {
  }

  deleteUser(i:any){
    this.users.splice(i, 1);
    console.log(i);
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




}
