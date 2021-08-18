import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LocationSearchFieldComponent } from './location-search-field/location-search-field.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import {HttpClientModule} from '@angular/common/http';
import { MetaWeatherService } from './services/meta-weather-service';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    BarChartComponent,
    LocationSearchFieldComponent,
    WeatherDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MetaWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
