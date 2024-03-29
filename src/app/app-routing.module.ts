import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{UsersComponent} from './users/users.component'
import{AdminComponent} from "./admin/admin.component"
import{ErrorComponent} from './error/error.component'
const routes: Routes = [
  {
    path:'users',  
    component:UsersComponent 
  },
  {
    path:'admin',    
    component:AdminComponent
  },
  {
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
