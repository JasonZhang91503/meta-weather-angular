import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class MetaWeatherService {
    metaWeatherBaseUrl = "https://www.metaweather.com/";
    locationUrl = `${this.metaWeatherBaseUrl}api/location/`;
    locationSearchUrl = `${this.metaWeatherBaseUrl}api/location/search/`;

    constructor(private httpClient: HttpClient) { }

    getMetaWeatherByLocation(location: string){
        const params = new HttpParams()
            .set('query', location);
        return this.httpClient.get(this.locationSearchUrl, { params })
            .pipe(
                map((x: any) => {
                    let b = x.filter(x => x.title.toLowerCase() === location);
                    let a =  b[0];
                    let c = a.woeid;
                    return x;
                }),
                map((data: any) => data.filter(x => x.title.toLowerCase() === location)[0].woeid),
                switchMap((woeid: any) => {
                    return this.httpClient.get(`${this.locationUrl}${woeid}`);
                })
            )
    }
}