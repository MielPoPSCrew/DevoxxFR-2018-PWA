import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Event } from '../models/event';
import { map, flatMap, toArray, switchMap, tap, filter, share, mergeMap, single} from 'rxjs/operators';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class EventsService {

  private events: Event[] = [];
  private wednesdayEvents: Event[] = [];
  private thursdayEvents: Event[] = [];
  private fridayEvents: Event[] = [];
  private events$: Observable<Event[]>;

  constructor(private http: HttpClient) {
    this.getEvents().subscribe();
  }

  public getEvent(slotId: string): Observable<Event> {
    return this.getEvents()
      .pipe(
        mergeMap(event => event),
        single(event => event.slotId === slotId)
      );
  }

  public getEventsWithIds(talksId: string[]): Observable<Event[]> {
    return this.getTalks()
      .pipe(
        mergeMap(event => event),
        map(event => event),
        filter(event => talksId.includes(event.talk.id)),
        toArray()
      );
  }

  public getTalk(talkId: string): Observable<Event> {
    return this.getTalks()
      .pipe(
        mergeMap(event => event),
        single(event => event.talk.id === talkId)
      );
  }

  public getTalks(): Observable<Event[]> {
    return this.getEvents().pipe(
      mergeMap(event => event),
      filter(event => event.isTalk()),
      toArray()
    );
  }

  public getEvents(): Observable<Event[]> {
    if (this.events.length > 0) {
      console.log('[Event] Serving cache');
      const cloned: Event[] = Object.create(this.events);
      return of(this.events);
    } else if (this.events$) {
      console.log('[Event] Merge request');
      return this.events$;
    } else {
      console.log('[Event] Fetching API');

      this.events$ =  forkJoin(
        this.requestEventsForDay(AppConstants.API_SCHEDULES_WEDNESDAY),
        this.requestEventsForDay(AppConstants.API_SCHEDULES_THURSDAY),
        this.requestEventsForDay(AppConstants.API_SCHEDULES_FRIDAY)
      ).pipe(
        map(([s1, s2, s3]) => [...s1, ...s2, ...s3]),
        map(result => {
          this.events = result;
          this.events$ = null;
          return result;
        }),
        share()
      );

      return this.events$;
    }
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

  private eventFromSlot(slot: Slot): Observable<Event> {
    return of(Event.fromJson(slot));
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
