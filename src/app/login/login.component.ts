import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';
import { PubService } from '../pubsub/displaypub.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public $state: StateService,private ps:PubService) {  }

  handleClick() {
    this.$state.go('dashboard.display');
    this.ps.pubLogin("isUserLoggedIn");
   //console.log(this.ps.subLogin());
  }

  ngOnInit() { }

}
