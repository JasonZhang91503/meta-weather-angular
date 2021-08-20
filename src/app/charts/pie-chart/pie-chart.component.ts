import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  private _value: number;
  @Input() set value(value: number) {
    this._value = value;
    this.setPieValue(this._value);
  }

  get value(): number {

    return this._value;

  }
  pieValueStyle;

  constructor() { }

  ngOnInit(): void {
  }

  setPieValue(value: number) {
    this.pieValueStyle = {
      "animation-delay": `-${value}s`
    };
  }

}
