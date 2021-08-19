import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit {
  public barChartDisplayData;
  
  private _weatherData: any;
  @Input() set weatherData(value: any) {
    this._weatherData = value;
    this.toBarChartDisplayData();
  }

  get weatherData(): any {

    return this._weatherData;

  }

  constructor() { }

  ngOnInit(): void {
  }

  toBarChartDisplayData(){
    let barChartData = [];
    let weathers = this._weatherData.consolidated_weather.slice(0, this._weatherData.consolidated_weather.length-1);
    
    weathers.forEach(weather => {
      barChartData.push(weather.min_temp);
      barChartData.push(weather.max_temp);
      barChartData.push(0);
    });

    barChartData.pop();

    let dates = weathers.map(weather => weather.applicable_date);

    this.barChartDisplayData = { data: barChartData, date: dates};
  }

}
