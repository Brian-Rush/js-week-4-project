import { Component, OnInit } from '@angular/core';
import { CacheService } from '../cache.service';
import { Cache } from '../cache.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(creator: string, lat: number, lng: number, address: string) {
    var newCache: Cache = new Cache(creator, lat, lng, address);
    this.cacheService.addCache(newCache);
  }

}
