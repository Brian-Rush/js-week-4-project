import { Injectable } from '@angular/core';
import { Cache } from './cache.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CacheService {
  caches: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.caches = database.list('caches');
  }

  getCaches() {
    return this.caches;
  }

  addCache(newCache: Cache) {
    this.caches.push(newCache);
  }

  getCacheById(cacheId: string) {
    return this.database.object('caches/' + cacheId);
  }

  updateCache(localUpdatedCache) {
    var cacheEntryInFirebase = this.getCacheById(localUpdatedCache.$key);
    cacheEntryInFirebase.update({creator: localUpdatedCache.creator,
                                  lat: localUpdatedCache.lat,
                                  lng: localUpdatedCache.lng});
  }

  deleteCache(localCacheToDelete) {
    var cacheEntryInFirebase = this.getCacheById(localCacheToDelete.$key);
    cacheEntryInFirebase.remove();
  }

}
