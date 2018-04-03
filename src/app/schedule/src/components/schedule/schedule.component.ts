import { Component, OnInit } from '@angular/core';
import { mockAPISchedule } from '../../../../mocks/mockAPISchedule';
import { mockSchedule } from '../../../../mocks/mockSchedule';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

    public mockSchedule = mockSchedule;

    constructor() { }

    ngOnInit() {
        console.log(mockSchedule);
    }

}
