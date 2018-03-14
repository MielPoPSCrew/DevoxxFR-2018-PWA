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
    });

    // Check update every 10 minutes
    interval(10 * 1000 * 6).subscribe(() => {
      updates.checkForUpdate();
    });

    updates.checkForUpdate();
  }
}
