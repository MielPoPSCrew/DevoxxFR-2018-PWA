import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../../services/events.service';
import { FavoriteTalksService } from '../../../../services/favorites.service';
import { Event } from '../../../../models/event';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  public eventsData: Event[];
  public schedule: any;

  constructor(private eventsService: EventsService, private favorite: FavoriteTalksService) {
      this.schedule = {};
  }

  sortEvents(eventsData): object {
      const tmpSchedule = {};

      eventsData.map((event) => {
          if (!tmpSchedule.hasOwnProperty(event.day)) {
              tmpSchedule[event.day] = [];
          }

          if (!_.findKey(tmpSchedule[event.day], { time: event.fromTime })) {
              const tmpPeriode = {};
              tmpPeriode[event.fromTime] = [];
              tmpSchedule[event.day].push({ time: event.fromTime, events: [] });
          }

          _.forEach(tmpSchedule[event.day], (periode) => {
              if (periode.time === event.fromTime) {
                  periode.events.push(event);
              }
          });
      });

      return tmpSchedule;
  }

  ngOnInit() {
    const bookmarks = this.favorite.getFavorites();
      this.eventsService.getEventsWithIds(bookmarks).subscribe((data) => {
          this.eventsData = data;
          this.schedule = this.sortEvents(this.eventsData);
          console.log('bookmark', this.schedule);
      });

  }
}
