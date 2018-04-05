import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { EventsService } from '../../../../services/events.service';
import { ActivatedRoute } from '@angular/router';

import { mockAPITalk } from '../../../../mocks/mockAPITalk';
@Component({
    selector: 'app-talk-detail',
    templateUrl: './talk-detail.component.html',
    styleUrls: ['./talk-detail.component.scss']
})
export class TalkDetailComponent implements OnInit {

    env = environment;
    displayedColumns = ['name'];
    public talk = mockAPITalk;

    constructor(
        private activatedRoute: ActivatedRoute,
        private eventsService: EventsService) { }

    ngOnInit() {
        // this.activatedRoute.params.subscribe((params) => {
        //     const id = params['talkId'];
        //     console.log(id);
        //     this.eventsService.getTalk(id).subscribe((data) => {
        //         this.talk = data;
        //         console.log(this.speaker);
        //     });
        // });
    }
}
