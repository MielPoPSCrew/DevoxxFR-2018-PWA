import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../../services/events.service';
import { FavoriteTalksService } from '../../../../services/favorites.service';
import { Event } from '../../../../models/event';
import * as _ from 'lodash';
import { NavigationService } from '../../../../services/navigation.service';

@Component({
    selector: 'app-bookmarks',
    templateUrl: './bookmarks.component.html',
    styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

    public eventsData: Event[];
    public bookmark: any;
    public isBookmarkResolved: boolean;
    private selectedIndex: number;

    constructor(private eventsService: EventsService, private favorite: FavoriteTalksService, private navigation: NavigationService) {
        this.bookmark = {};
        this.isBookmarkResolved = false;
    }

    onTabChange(selectedTab: number): void {
        this.navigation.put('schedule-day', selectedTab['index']);
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
        this.eventsService.getTalksWithIds(bookmarks).subscribe((data) => {
            this.eventsData = data;
            this.bookmark = this.sortEvents(this.eventsData);
            this.isBookmarkResolved = true;
        });

        if (this.navigation.popEvent) {
            this.selectedIndex = this.navigation.get('schedule-day');
        }
    }
}
