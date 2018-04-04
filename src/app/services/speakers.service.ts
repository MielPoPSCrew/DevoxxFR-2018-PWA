import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { map, toArray, single, mergeMap, flatMap, share } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Speaker } from '../models/speaker';

@Injectable()
export class SpeakersService {

  private speakers: Speaker[] = [];
  private speakers$: Observable<Speaker[]>;

  constructor(private http: HttpClient) {
    this.requestSpeakers().subscribe(data => console.log('speakers', data));
  }

  public getSpeakers(): Observable<Speaker[]> {
    return this.requestSpeakers();
  }

  public getSpeaker(uuid: string): Observable<Speaker> {
    return this.requestSpeakers()
      .pipe(
        mergeMap(speaker => speaker),
        single(speaker => speaker.uuid === uuid)
      );
  }

  private requestSpeakers(): Observable<Speaker[]> {
    if (this.speakers.length > 0) {
      console.log('cache');
      return of(this.speakers);
    } else if (this.speakers$) {
      console.log('merge');
      return this.speakers$;
    } else {
      console.log('retrieved');
      this.speakers$ = this.http.get<SpeakersApiResponse[]>(AppConstants.API_SPEAKERS)
      .pipe(
        flatMap(speaker => {
          return speaker;
        }),
        flatMap(speaker => {
          return this.requestSpeaker(speaker.uuid);
        }),
        toArray(),
        share()
      );

      return this.speakers$;
    }
  }

  private requestSpeaker(uuid: string): Observable<Speaker> {
    return this.http.get<SpeakerApiResponse>(AppConstants.API_SPEAKERS + '/' + uuid)
    .pipe(
      map(speaker => Speaker.fromJson(speaker))
    );
  }
}

interface SpeakersApiResponse {
  uuid: string;
}

interface SpeakerApiResponse {
  uuid: string;
  bioAsHtml: string;
  acceptedTalks: [{
    id: string;
  }];
  company: string;
  bio: string;
  lastName: string;
  firstName: string;
  blog: string;
  avatarURL: string;
  twitter: string;
  lang: string;
}
