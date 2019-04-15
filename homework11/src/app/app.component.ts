import { Component, ContentChild, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>App Component</h1>
  
  <counterComponent counterValue={{ComponentCounterValue}} (counterChange)="onCounterChange($event)"></counterComponent>
  
    Component Counter Value={{ComponentCounterValue}}

  `,
 
  styles: ['']
})
export class AppComponent {

 title = 'homework11';
  ComponentCounterValue=0;
  onCounterChange(e){
      this.ComponentCounterValue=e;
  }
}
