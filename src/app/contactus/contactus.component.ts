import { Component, OnInit } from '@angular/core';

import { StateService } from '@uirouter/core';

import { valid } from "../../assets/scripts/validation";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(public $state: StateService) { }

  handleClick() {
    if (valid()) {

      this.$state.go('dashboard');
    }
  }
ngOnInit() {}
}
