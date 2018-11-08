import { Component, NgZone } from '@angular/core';
import { Validators, FormBuilder, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { StateService } from '@uirouter/core';
import { PubService } from '../pubsub/displaypub.service';
import { DataService } from '../dataservices/dataservice.service';
import { customvalidating } from './customvalidator';
import { testfile } from '../externalfiles/example';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailerr: any;
  passerr: any;
  tok: string = "geetha123";
  //name: testfile =  new testfile();

  constructor(private fb: FormBuilder, public $state: StateService, private ps: PubService, private ds: DataService, private _zone: NgZone) {
    this.errMessage();
    //this.name.sayHi();
  }

  handleClick() {
    this.ds.getData().subscribe(result => {
      if (this.tok) {
        localStorage.setItem("authtoken", this.tok);
        this.ps.pubLogin("isUserLoggedIn");
        this.$state.go('dashboard.display');
      }
    }, err => { });
  }

  profileForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(4)]],
    pwd: ['', [Validators.required, customvalidating]  ]
  });

  errMessage() {
    this.emailerr = "Email is required";
    this.passerr = "password id required";
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
