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

  constructor(private cacheService: CacheService) { }

  ngOnInit() {
  }

  submitForm(creator: string, lat: number, lng: number, address: string) {
    var newCache: Cache = new Cache(creator, lat, lng, address);
    this.cacheService.addCache(newCache);
    if (lat && lng) {
      getByLatLng(lat, lng);
    }
    console.log(newCache);
  }

}
