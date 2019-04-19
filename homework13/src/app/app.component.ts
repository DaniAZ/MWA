import { Component, OnInit } from '@angular/core';
import { DataService } from './data-service';

@Component({
  selector: 'app-root',
  template: `<h1>On Line Data</h1>
  
  <a [routerLink]="['users']">users</a>

  <router-outlet></router-outlet>
  `,
  styles: ['']
})
export class AppComponent  {
  title = 'homework13';

}
