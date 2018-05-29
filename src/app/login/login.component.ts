import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';
import { PubService } from '../pubsub/displaypub.service';
import { DataService } from '../dataservices/dataservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tok:string = "geetha123";
  constructor(public $state: StateService,private ps:PubService,private ds:DataService) {  }

  handleClick() {
   
    this.ds.getData().subscribe(result=>{
      if(this.tok){
        localStorage.setItem("authtoken", this.tok);
        this.ps.pubLogin("isUserLoggedIn");
        this.$state.go('dashboard.display');
       }
    },err=>{});
    //console.log(this.ps.subLogin());
  }

  ngOnInit() { }

}
