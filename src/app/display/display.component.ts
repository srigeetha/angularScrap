import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservices/dataservice.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  data: any;
  constructor(private ds: DataService) {
    this.ds.getData().subscribe(result=>{
       this.data = result;
       console.log("in subscribe ", this.data); 
    },err=>{
      console.log("in subscribe ", err);
    });
   }
  ngOnInit() {
  }

}
