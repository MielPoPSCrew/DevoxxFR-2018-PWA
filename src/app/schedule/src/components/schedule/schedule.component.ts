import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../../services/events.service';

import * as _ from 'lodash';
import { Event } from '../../../../models/event';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

    public eventsData: Event[];
    public schedule: any;

    constructor(private eventsService: EventsService) {
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
        this.eventsService.getEvents().subscribe((data) => {
            this.eventsData = data;
            this.schedule = this.sortEvents(this.eventsData);
            console.log('schedule', this.schedule);
        });

    }
}
