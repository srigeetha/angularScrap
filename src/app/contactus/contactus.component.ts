import { Component, OnInit } from '@angular/core';

import { StateService } from '@uirouter/core';

<<<<<<< HEAD
import  { valid } from "../../assets/scripts/validation";

=======
>>>>>>> 75c4901c1d0c3ac633ff23e265fb040784638f7a
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(public $state: StateService) { }
  handleClick() {
<<<<<<< HEAD
   if(valid()){
    this.$state.go('dashboard');
   }
  }

=======
    this.$state.go('dashboard');
  }
>>>>>>> 75c4901c1d0c3ac633ff23e265fb040784638f7a
  ngOnInit() {

  }

}
