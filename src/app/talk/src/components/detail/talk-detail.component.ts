import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { EventsService } from '../../../../services/events.service';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../../../models/event';

@Component({
    selector: 'app-talk-detail',
    templateUrl: './talk-detail.component.html',
    styleUrls: ['./talk-detail.component.scss']
})
export class TalkDetailComponent implements OnInit {

    env = environment;
    displayedColumns = ['name'];
    event: Event;

    constructor(
        private activatedRoute: ActivatedRoute,
        private eventsService: EventsService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            const id = params['talkId'];
            console.log(id);
            this.eventsService.getTalk(id).subscribe((data) => {
                this.event = data;
                console.log(this.event);
            });
        });
    }
}
