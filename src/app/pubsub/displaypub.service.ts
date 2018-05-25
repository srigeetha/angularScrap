import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PubService {
    logoutServe:Subject<any> =  new Subject<any>();
constructor(){}
    pubLogin(status:String){
      return  this.logoutServe.next(status);
    }
    subLogin(){
      return  this.logoutServe.asObservable();
    }
}