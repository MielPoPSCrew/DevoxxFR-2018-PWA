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
      console.log('UPDATE');
      this.updateAvailable.next(true);
    });

    // Check update every 10 seconds (for demo)
    interval(10 * 1000).subscribe(() => {
      updates.checkForUpdate();
      console.log('Checking updates');
    });

    updates.checkForUpdate();
  }
}
