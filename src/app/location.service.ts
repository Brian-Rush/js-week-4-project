import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';
import { Cache } from './cache.model';
import { CacheService } from './cache.service';


@Injectable()
export class LocationService {
  locatedCache: Cache;

  constructor(private http: Http, private cacheService: CacheService) { }

  getByLatLng(lat: number, lng: number) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + geoKey, function(response) {
      console.log(response);
    });
  }

  getByAddress(address: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" + geoKey)
  }

}
