import { MetaWeatherService } from './../services/meta-weather-service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-location-search-field',
  templateUrl: './location-search-field.component.html',
  styleUrls: ['./location-search-field.component.scss']
})
export class LocationSearchFieldComponent implements OnInit {
  public isSearching: boolean;

  @Output() onGetWeather = new EventEmitter<any>();

  constructor(private metaWeatherService: MetaWeatherService) { }

  ngOnInit(): void {
  }


  onEnter(event){
    let location = event.target.value;

    this.isSearching = true;
    this.metaWeatherService.getMetaWeatherByLocation(location)
      .subscribe((data) => {
          this.isSearching = false;
          this.onGetWeather.emit(data);
        }
      )
  }
}
