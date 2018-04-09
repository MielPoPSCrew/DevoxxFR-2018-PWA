import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { Speaker } from '../../../../models/speaker';

// Services
import { EventsService } from '../../../../services/events.service';
import { SpeakersService } from '../../../../services/speakers.service';


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

    errorHandler(event) {
        event.target.src = '/assets/default_black.png';
    }
}
