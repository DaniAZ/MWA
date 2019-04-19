import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailComponent } from './userdetail.component';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error.component';
import { UserValidationGuard } from './user-validation.guard';

@NgModule({
  declarations: [UsersComponent, UserdetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UsersComponent },
      { path: ':uuid', component: UserdetailComponent,canActivate:[UserValidationGuard]},
      //{path:'error',component:ErrorComponent},
      {path:'**',redirectTo:'/'}
    ])
  ],
  providers:[UserValidationGuard]
})
export class UsersModule { }
  