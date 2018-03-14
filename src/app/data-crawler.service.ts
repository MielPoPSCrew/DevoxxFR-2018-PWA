import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

const URL = 'http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/';

@Injectable()
export class DataCrawlerService {

  constructor(private http: HttpClient) { }

  getSpeakers(): Observable<any>{
    const url = URL + 'speakers';
    return this.http.get(url);
  }

  getSchedules(day : string): Observable<any> {
    const url = URL + 'schedules/' + day;
    return this.http.get(url);
  }

}
