import { ErrorComponent } from './users/error.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [RouterModule.forRoot([{path:'users',loadChildren:'./users/users.module#UsersModule'},
                                  {path:'error',component:ErrorComponent}
                                   ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
