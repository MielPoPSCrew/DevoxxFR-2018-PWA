import { Injectable } from '@angular/core';
import { EventsService } from './events.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, mergeMap, single, toArray, tap } from 'rxjs/operators';
import { concat } from 'rxjs/operators/concat';
import { Event } from '../models/event';

const cacheKey = 'favorite-events';

@Injectable()
export class FavoriteTalksService {

  private favoritesTalksId: string[];

  constructor(private events: EventsService) {
    this.favoritesTalksId = this.retrievedFavoritesFromCache();
  }

  public getFavorites(): string[] {
    return this.favoritesTalksId.slice();
  }

  public isFavorite(talkId: string): boolean {
    return this.favoritesTalksId.includes(talkId);
  }

  public addFavorite(talkId: string): void {
    if (!this.isFavorite(talkId)) {
      this.favoritesTalksId.push(talkId);
      this.saveFavoritesInCache();
    }
  }

  public removeFavorite(talkId: string): boolean {
    if (!this.isFavorite(talkId)) {
      return false;
    }

    this.favoritesTalksId.splice(this.favoritesTalksId.indexOf(talkId), 1);
    this.saveFavoritesInCache();
    return true;
  }

  private retrievedFavoritesFromCache(): string[] {
    const cacheData: FavoritesCache = JSON.parse(localStorage.getItem(cacheKey));
    return cacheData ? cacheData.events : [];
  }

  private saveFavoritesInCache(): void {
    localStorage.removeItem(cacheKey);
    localStorage.setItem(cacheKey, JSON.stringify({events : this.favoritesTalksId}));
  }

}

interface FavoritesCache {
  events: string[];
}
