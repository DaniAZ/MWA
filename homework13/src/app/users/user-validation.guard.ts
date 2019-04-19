import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data-service';


@Injectable({
  providedIn: 'root'
})
export class UserValidationGuard implements CanActivate  {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private dataService:DataService,private router:Router){ }
  
   canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    if(this.dataService.isExist(route.params.uuid)){
      return true;
    }
     return this.router.navigate(['error'])
  
   }
  
}
