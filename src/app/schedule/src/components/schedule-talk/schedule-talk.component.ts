import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { InfoModalComponent } from '../info-modal/info-modal.component';
import { FavoriteTalksService } from '../../../../services/favorites.service';
import { Talk } from '../../../../models/talk';

@Component({
    selector: 'app-schedule-talk',
    templateUrl: './schedule-talk.component.html',
    styleUrls: ['./schedule-talk.component.scss']
})
export class ScheduleTalkComponent implements OnInit {

    @Input('talk') talk: Talk;
    favorited: boolean;

    constructor(private favorites: FavoriteTalksService) { }

    ngOnInit() {
        this.favorited = this.favorites.isFavorite(this.talk.id);
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
