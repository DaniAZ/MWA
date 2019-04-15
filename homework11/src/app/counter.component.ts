import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';


@Component({
  selector: 'counterComponent',
  template: `
     <button type="button" (click)="onAddition()">Add</button>
    {{counter}}
    <button type="button" (click)="onSubtraction()">Subtract</button>
  `,
  styles: []
})
export class CounterComponent implements OnChanges {
 
  public counter;
  @Input() counterValue;
  @Output() counterChange=new EventEmitter();

  ngOnChanges() {
    this.counter=this.counterValue;
  }

 onAddition(){
  this.counterValue= this.counter++;
   this.counterChange.emit(this.counter);
   return false;
 }
 onSubtraction(){
   this.counterValue=this.counter--;
   this.counterChange.emit(this.counter);
   return false;

 }

}
