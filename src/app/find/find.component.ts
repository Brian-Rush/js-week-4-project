import { Component, OnInit } from '@angular/core';
import { Cache } from '../cache.model';
import { Router } from '@angular/router';
// import { CacheService } from '../cache.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
