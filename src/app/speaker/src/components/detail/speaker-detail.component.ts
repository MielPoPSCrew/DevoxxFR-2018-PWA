import { Component, OnInit } from '@angular/core';
import { SpeakersService } from '../../../../services/speakers.service';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../../services/events.service';
import { environment } from '../../../../../environments/environment';
import { Speaker } from '../../../../models/speaker';

@Component({
    selector: 'app-speaker',
    templateUrl: './speaker-detail.component.html',
    styleUrls: ['./speaker-detail.component.scss']
})
export class SpeakerDetailComponent implements OnInit {

    displayedColumns = ['type', 'title'];
    env = environment;

    public speaker: Speaker;

    constructor(
        private activatedRoute: ActivatedRoute,
        private speakersService: SpeakersService,
        private eventsService: EventsService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            const speakerId = params['speakerId'];
            console.log('speakerId', speakerId);

            this.speakersService.getSpeaker(speakerId).subscribe((data) => {
                this.speaker = data;
                console.log(this.speaker);
            });
        });
    }
}
