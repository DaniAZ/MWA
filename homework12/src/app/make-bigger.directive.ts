import { Directive, OnChanges, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective  {
     public size=14;
 
  constructor(private element:ElementRef,private renderer2:Renderer2) {
    
   }
    
   @HostListener('click') onClick() {
      this.byClick();
   }
    byClick(){
      this.size+=2
     // let x= this.element.nativeElement.style.fontSize=this.size+'px';
      this.renderer2.setStyle(this.element.nativeElement, 'fontSize', `${this.size}px`);
        }
}
