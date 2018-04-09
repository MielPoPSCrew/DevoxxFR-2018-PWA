import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { environment } from '../../../../../environments/environment';

// Models
import { Talk } from '../../../../models/talk';
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

    public talks: Talk[];
    public talksData = new MatTableDataSource();
    public speaker: Speaker;

    constructor(
        private activatedRoute: ActivatedRoute,
        private speakersService: SpeakersService,
        private eventsService: EventsService) {
            this.talks = [];
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            const speakerId = params['speakerId'];
            console.log('speakerId', speakerId);

            this.speakersService.getSpeaker(speakerId).subscribe((data) => {
                this.speaker = data;

                this.speaker.acceptedTalks.map((talk) => {
                    this.eventsService.getTalk(talk.id).subscribe((fullEvent) => {
                        console.log(fullEvent.talk);
                        this.talks.push(fullEvent.talk);
                        this.talksData.data = this.talks;
                    });
                });

                console.log(this.speaker);
            });
        });
    }

    errorHandler(event) {
        event.target.src = '/assets/default_black.png';
    }
}
