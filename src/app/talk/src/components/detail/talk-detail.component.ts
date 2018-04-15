import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../../../models/event';
import { Speaker } from '../../../../models/speaker';
import { MatTableDataSource } from '@angular/material';

// Services
import { FavoriteTalksService } from '../../../../services/favorites.service';
import { EventsService } from '../../../../services/events.service';
import { SpeakersService } from '../../../../services/speakers.service';

@Component({
    selector: 'app-talk-detail',
    templateUrl: './talk-detail.component.html',
    styleUrls: ['./talk-detail.component.scss']
})
export class TalkDetailComponent implements OnInit {

    env = environment;
    displayedColumns = ['avatar', 'firstName', 'lastName'];
    event: Event;
    dayFr: string;
    private dateOptions = { weekday: 'long', day: 'numeric' };
    speakers: Speaker[];
    speakersData = new MatTableDataSource();
    favorited: boolean;

    constructor(
        private activatedRoute: ActivatedRoute,
        private eventsService: EventsService,
        private speakersService: SpeakersService,
        private favorites: FavoriteTalksService) {
            this.speakers = [];
        }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            const id = params['talkId'];
            this.eventsService.getTalk(id).subscribe((data) => {
                this.event = data;
                this.favorited = this.favorites.isFavorite(this.event.talk.id);

                this.event.talk.speakers.map((speaker) => {
                    this.dayFr = new Date(this.event.fromTimeMillis).toLocaleDateString('fr-FR', this.dateOptions);
                    this.speakersService.getSpeaker(speaker.id).subscribe((fullSpeaker) => {
                        this.speakers.push(fullSpeaker);
                        this.speakersData.data = this.speakers;
                    });
                });
            });
        });
    }

    errorHandler(event) {
        event.target.src = '/assets/default_black.png';
    }

    bookmarkTalk(talkId: string) {
        if (this.favorites.isFavorite(talkId)) {
            this.favorites.removeFavorite(talkId);
            this.favorited = false;
        } else {
            this.favorites.addFavorite(talkId);
            this.favorited = true;
        }
    }
}
