import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-schedule-periode',
    templateUrl: './schedule-periode.component.html',
    styleUrls: ['./schedule-periode.component.scss']
})
export class SchedulePeriodeComponent implements OnInit {

    @Input('periode') periode: any;

    constructor() { }

    ngOnInit() {
        // console.log('periode', this.periode);
    }

}
