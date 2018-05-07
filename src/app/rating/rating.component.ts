import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  max = 10;
  rate = 7;
  isReadonly = false;
 
  overStar: number;
  percent: number;
 
  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }
 
  resetStar(): void {
    this.overStar = void 0;
  }
  constructor() { }

  ngOnInit() {
  }

}
