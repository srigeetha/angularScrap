import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public $state: StateService) { }

  handleClick() {
    this.$state.go('dashboard.accordion');
  }
  ngOnInit() {
  }

}
