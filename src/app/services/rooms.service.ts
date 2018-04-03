import { Injectable } from '@angular/core';
import { Room } from '../models/room';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { map, toArray, single, mergeMap, flatMap, share } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoomsService {

  private rooms: Room[] = [];
  private rooms$: Observable<Room[]>;

  constructor(private http: HttpClient) {
    // Retrived existing rooms
    this.requestRooms().subscribe();
  }

  public getRooms(): Observable<Room[]> {
    return this.requestRooms();
  }

  public getRoom(id: string): Observable<Room> {
    return this.requestRooms().pipe(
      mergeMap(room => room),
      single(room => room.id === id)
    );
  }

  private requestRooms(): Observable<Room[]> {
    if (this.rooms.length > 0) {
      console.log('Delivring room from cache');
      return of(this.rooms);
    } else if (this.rooms$) {
      console.log('Merging request with the current one');
      return this.rooms$;
    } else {
      console.log('Creating new request');
      this.rooms$ = this.http.get<RoomsApiResponse>(AppConstants.API_ROOMS)
      .pipe(
        map(response => {
          this.rooms$ = null;
          return response.rooms;
        }),
        flatMap(room => {
          return room;
        }),
        map(room => {
          const roomObject = Room.fromJson(room);
          this.rooms.push(roomObject);
          return roomObject;
        }),
        toArray(),
        share()
      );

      return this.rooms$;
    }
  }

}

interface RoomsApiResponse {
  content: string;
  rooms: [{
    id: string;
    name: string;
    capacity: number;
    setup: string;
  }];
}
