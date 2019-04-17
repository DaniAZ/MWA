import { element } from 'protractor';
import { Directive, ElementRef, Renderer2, Input, OnChanges, HostBinding } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective implements OnChanges {
  @Input() isVisible:boolean;

  //constructor(private element:ElementRef,private renderer2:Renderer2) { }
  
  constructor() {}

  @HostBinding('style.visibility') eleVisibility;

  // ngOnInit() {
  //   this.eleVisibility = !this.isVisible ? 'hidden' : 'none';
  // }

  ngOnChanges() {
    this.eleVisibility = !this.isVisible ? 'hidden' : 'none';
  }
  

}
