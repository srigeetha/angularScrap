import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class DataService {
  data: any[];
  constructor(private http: Http) {
    console.log("Dataservice constructor");
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(result => {
      console.log("in subscribe" + result);
      console.log("in subscribe" + JSON.stringify(result));
    },
      err => {
        console.log("Error is " + err)
      })
  }
}
