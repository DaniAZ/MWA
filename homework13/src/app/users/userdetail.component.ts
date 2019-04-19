import { DataService } from './../data-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-userdetail',
  template: `
  <ul>
  <li *ngFor="let u of user | keyvalue">{{u.key | uppercase}} - {{u.value}}
</ul>
  `,
  styles: []
})
export class UserdetailComponent implements OnInit {
   uuid;
   user;
   private subscription:Subscription;
  constructor(private dataService:DataService,private route:ActivatedRoute) {

    this.subscription=this.route.params.subscribe(
            params=>{this.uuid=params['uuid'];
            this.user=this.dataService.getUser(this.uuid);
         })
       
       }

  ngOnInit() {
   
  }

}
