import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CacheService } from '../cache.service';
import { Cache } from '../cache.model';
import { LocationService } from '../location.service';
// import { Router } from

@Component({
  selector: 'app-add',
  templateUrl: './add-by-lat-lng.component.html',
  styleUrls: ['./add-by-lat-lng.component.scss'],
  providers: [CacheService, LocationService]
})
export class AddComponent implements OnInit {
  caches: any[] = null;
  noCaches: boolean = false;

  constructor(
    private cacheService: CacheService,
    private locationService: LocationService
  ) { }

  // checkApiCall(creator: string, lat: string, lng: string) {
  //
  // }

  createByLatLng(creator: string, lat: string, lng: string, response: string) {
    let newCache: Cache = new Cache(creator, lat, lng, response);
    // this.newCache.creator = creator;
    // this.newCache.lat = lat;
    // this.newCache.lng = lng;
    // this.newCache.address = (address) => {getByLatLng(lat, lng)}
    this.locationService.getByLatLng(lat, lng).subscribe(response => {
      console.log(response.json().results[0].formatted_address);
      if (response.json().results.length) {
        newCache.address = response.json().results[0].formatted_object;
      } else {
        alert("Oh no! We can't find that location. Wanna try another latitude / longitude?");
      }
    });
    // console.log(newCache);
  }

  ngOnInit() {
  }

  // submitLatLng(creator: string, lat: string, lng: string) {
  //   var newCache: Cache = new Cache(creator, lat, lng, address);
  //   this.cacheService.addCache(newCache);
  //   // getByLatLng(lat, lng);
  //   console.log(newCache);
  // }

  // submitAddress(creator: string, street: string, city: string, state: string) {
  //   var newCache: Cache = new Cache(creator, street, city, state)
  //   this.cacheService.addCache(newCache);
  //   if (lat && lng) {
  //     getByLatLng(lat, lng);
  //   }
  //   console.log(newCache);
  // }

}
