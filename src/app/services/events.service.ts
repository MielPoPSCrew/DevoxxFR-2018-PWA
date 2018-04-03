import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Event } from '../models/event';
import { map, flatMap, toArray, switchMap, tap, take, filter, share } from 'rxjs/operators';
import { RoomsService } from './rooms.service';
import { SpeakersService } from './speakers.service';

@Injectable()
export class EventsService {

  private events: Event[] = [];
  private wednesdayEvents: Event[] = [];
  private thursdayEvents: Event[] = [];
  private fridayEvents: Event[] = [];
  private events$: Observable<Event[]>;

  constructor(private http: HttpClient, private rooms: RoomsService, private speakers: SpeakersService) {
    this.requestEventsForDay(AppConstants.API_SCHEDULES_FRIDAY).pipe(tap(data => console.log('friday', data))).subscribe();
  }

  private requestEventsForDay(uri: string): Observable<Event[]> {
    return this.http.get<ScheduleApiResponse>(uri)
    .pipe(
      map(response => response.slots),
      flatMap(slot => slot),
      filter(slot => !slot.notAllocated),
      flatMap(slot => this.eventFromSlot(slot)),
      toArray(),
      share()
    );
  }

  private requestEvents(): Observable<Event[]> {
    return null;
  }
  // if talk
  // slot.speakers => []
  // flatMap [] => link.href.getSpeakerId
  // flatMap id => this.speakers.get(id)
  // toArray
  private eventFromSlot(slot: Slot): Observable<Event> {
    if (slot.talk) {
      return of(Event.fromJson(slot)).pipe(
        // Associate room to event
        switchMap(event => this.rooms.getRoom(slot.roomId).pipe(
          tap(a => console.log('-slot' + slot.slotId + ' - executed1')),
          map(room => {
            event.room = room;
            return event;
          })
        )),
        // Associate each speakers to the talk
        switchMap(event => of(slot.talk.speakers).pipe(
          tap(a => console.log),
          flatMap(speakersLinks => speakersLinks),
          map(speakerLink => {
            const speakerUid = speakerLink.link.href.substr(speakerLink.link.href.lastIndexOf('/') + 1);
            event.talk.speakers.push(speakerUid);
            return event;
          })
        ))
      );
    } else {
      return of(Event.fromJson(slot)).pipe(
        // Associate room to event
        switchMap(event => this.rooms.getRoom(slot.roomId).pipe(
          tap(a => console.log('slot' + slot.slotId + ' - executed2')),
          map(room => {
            event.room = room;
            return event;
          })
        )),
      );
    }
  }
}

interface ScheduleApiResponse {
  slots: Slot[];
}

interface Slot {
  roomId: string;
  fromTimeMillis: number;
  break?: {
    id: string;
    nameEN: string;
    nameFR: string;
    recorded: string
  };
  talk?: {
    trackId: string;
    talkType: string;
    track: string;
    summaryAsHtml: string;
    id: string;
    speakers: [{
      link: {
        href: string;
      }
    }];
    title: string;
    lang: string;
    summary: string;
  };
  notAllocated: boolean;
  fromTime: string;
  toTimeMillis: string;
  toTime: string;
  slotId: string;
  day: string;
}
