import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PermissionGuard } from 'src/app/service/permission.guard';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  blog:boolean = false;
  toDoList:boolean = false;
  hidden = false;
  constructor(private router:Router,
    public permissionGuard: PermissionGuard) { }

  ngOnInit(): void {
    this.viewBlog()
    this.viewToDoList()
  }

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;

}

logout(){
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
}

viewBlog(){
  if(this.permissionGuard.addViewRights('blog')){
    this.blog = false;

  }
  else{
    this.blog = true;
  }
}

viewToDoList(){
  if(this.permissionGuard.addViewRights('toDoList')){
    this.toDoList = false;

  }
  else{
    this.toDoList = true;
  }
}

}
