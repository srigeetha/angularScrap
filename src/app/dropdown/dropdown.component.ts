import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  selectedOption:any;
  
  @Input()
  datalist:any;

  @Output()
  message = new EventEmitter<string>();


  constructor() { 

  }

  sendMessage(){
    this.message.emit(this.selectedOption);
  }

  ngOnInit() {
  } 

}
