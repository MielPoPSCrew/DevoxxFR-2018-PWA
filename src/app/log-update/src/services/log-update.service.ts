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

    interval(120 * 1000).subscribe(() => {
      updates.checkForUpdate();
    });

    updates.checkForUpdate();
  }
}
