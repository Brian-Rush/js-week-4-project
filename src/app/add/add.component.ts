import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CacheService } from '../cache.service';
import { Cache } from '../cache.model';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [CacheService, LocationService]
})
export class AddComponent implements OnInit {
  caches: any[] = null;
  noCaches: boolean = false;

  constructor(
    // private router: Router,
    private cacheService: CacheService,
    private locationService: LocationService
  ) { }

  ngOnInit() {
  }

  submitLatLng(creator: string, lat: number, lng: number) {
    var newCache: Cache = new Cache(creator, lat, lng);
    this.cacheService.addCache(newCache);
    getByLatLng(lat, lng);
    console.log(newCache);
  }

  submitAddress(creator: string, street: string, city: string, state: string) {
    var newCache: Cache = new Cache(creator, street, city, state) 
    this.cacheService.addCache(newCache);
    if (lat && lng) {
      getByLatLng(lat, lng);
    }
    console.log(newCache);
  }

}
