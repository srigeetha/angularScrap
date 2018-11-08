import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

 // @Input() message : string;

  message : string = "hello mundo";

   @Output() event = new EventEmitter<string>();
  
  sendMessage(){
   this.event.emit(this.message);
   }

  ngOnInit() {
  }

}
