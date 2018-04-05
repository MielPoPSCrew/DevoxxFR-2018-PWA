import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../../../models/event';

@Component({
    selector: 'app-schedule-break',
    templateUrl: './schedule-break.component.html',
    styleUrls: ['./schedule-break.component.scss']
})
export class ScheduleBreakComponent implements OnInit {

    @Input('event') event: Event;

    constructor() { }

    ngOnInit() { }
}
