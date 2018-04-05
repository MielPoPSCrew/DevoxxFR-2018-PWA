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
        activatedRoute: ActivatedRoute,
        eventsService: EventsService) {
            // activatedRoute.params.subscribe((params) => {
            //     const id = params['talkId'];
            //     console.log(id);
            //     eventsService.getTalk(id).subscribe((data) => {
            //         this.talk = data;
            //         console.log(this.speaker);
            //     });
            // });
     }

    ngOnInit() {
        console.log(this.talk);
    }
}
