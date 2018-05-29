import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  countires:any;

  recieved(msg:string){

  }
  constructor() { 
    this.countires=[{name:"India",code:"In"},{name:"UnitedStates",code:"Us"}];
  }

  ngOnInit() {
  }
 
  
}
