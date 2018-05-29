import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input()
  datalist:any;

  constructor() { }

  ngOnInit() {
  } 

}
