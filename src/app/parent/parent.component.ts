import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  message = "Display Message";  

  recMessage($event){
    this.message = $event;
  } 

  ngOnInit() {
  }

}
