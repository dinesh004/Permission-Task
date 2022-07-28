import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog/blog.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth.guard';
import { ToDoListComponent } from './to-do-list/to-do-list/to-do-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

  { path: 'blog', component: BlogComponent, loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
  canActivate: [AuthGuard],
  // data: {
  //   expectedRole: 'blog'
  // }

},
  { path: 'todolist', component: ToDoListComponent, loadChildren: () => import('./to-do-list/to-do-list.module').then(m => m.ToDoListModule),
  canActivate: [AuthGuard],
},

  { path: '**', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
