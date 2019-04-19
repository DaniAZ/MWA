import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { UserValidationGuard } from './users/user-validation.guard';
import { ErrorComponent } from './users/error.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
