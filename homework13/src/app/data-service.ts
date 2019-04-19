import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }

  getOnlineData(){
     this.http.get('https://randomuser.me/api/?results=10')
     .subscribe(data=>localStorage.setItem('results',JSON.stringify(data)));
      }
  getCachedData(){
    return (JSON.parse(localStorage.getItem('results'))).results;
  }
  getUser(uuid){
    const user = this.getCachedData().find(users => users.login.uuid === uuid);
    return user===null? "Profile of the user does not exist":user ;
  }
  isExist(uuid): boolean {
    const user = this.getCachedData().find(users => users.login.uuid === uuid);
     return user ? true : false;
  }
}
