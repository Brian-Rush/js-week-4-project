import { Component } from '@angular/core';
import { CacheService } from './cache.service';
import { LocationService } from './location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CacheService, LocationService]
})
export class AppComponent {
  title = 'GEOCACHE FLOW';
}
