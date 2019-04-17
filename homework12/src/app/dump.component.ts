import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dump',
  template: `

    <ul>
    <li >{{data.name}} {{data.age}}</li>
    </ul>
   
  `,
  styles: []
})
export class DumpComponent  {
       @Input() data:{"name":string,"age":number};
       

}
