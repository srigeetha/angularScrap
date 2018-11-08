import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from "@angular/common/http";
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class DataService implements HttpInterceptor{

  constructor(private http: HttpClient) {
    console.log("Dataservice constructor");
    
  }
  getData(){
  
    return  this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
 intercept(req,next):any{
let tokenizedre= req.clone({
  setHeader:{
    Authorization:'Bearer xx.yy.zz'
  }
})
return 
 }
}

