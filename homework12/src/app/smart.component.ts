import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <p>
      Inside Smart Component
    </p>
     <app-dump *ngFor="let data of personArray" [data]="data"></app-dump>
     <div appIsVisible [isVisible]="true">isVisible Directive</div><br>
      <div appMakeBigger>Make this Text Bigger</div>
  `,
  styles: []
})
export class SmartComponent  {
    //@Input() person;
    public personArray:any[];
      constructor(){
         this.personArray=[
          {name:"Daniel",age:25},
          {name:"Dawit",age:22},
          {name:"Radea",age:20}]
      }
    
    
}
