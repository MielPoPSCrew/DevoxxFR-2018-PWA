import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs/observable/interval';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LogUpdateService {

  public updateAvailable: Subject<boolean>;

  constructor(updates: SwUpdate) {
    this.updateAvailable = new Subject<boolean>();

    updates.available.subscribe(event => {
      this.updateAvailable.next(true);
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });

    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });

    interval(5000).subscribe(() => {
      console.log('Checking update');
      updates.checkForUpdate();
    });
  }
}
