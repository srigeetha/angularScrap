import { Component, OnInit } from '@angular/core';
import { PubService } from '../pubsub/displaypub.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userLoggedin:boolean;
  
  constructor(private ps:PubService) {
    this.updateNav();
    this.menu();
  }
  
  ngOnInit() {  }

  updateNav(){
    this.ps.subLogin().subscribe(result=>{
      console.log("menu component" , result);  
      if(result == "isUserLoggedIn"){
        this.userLoggedin = true;
      }else {
        this.userLoggedin = false;
      }
    },
  err=>{
    console.log(" Error result is ", err )
  });
  }
  menu(){
    if(localStorage.getItem("authtoken")){
      console.log(localStorage.getItem("authtoken"));
      this.userLoggedin=true;
    }else{
      this.userLoggedin=false;
    }
  }
  handle(){
    localStorage.removeItem("authtoken");
    this.ps.pubLogin("loggedout");
  }
}
