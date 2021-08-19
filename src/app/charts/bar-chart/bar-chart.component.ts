import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input() weatherData;

  constructor() { }

  ngOnInit(): void {
  }

  getBarClass(value){
    return `bar-${value}`
  }

  getTitleClass(value){
    return `title-${value}`;
  }


}
