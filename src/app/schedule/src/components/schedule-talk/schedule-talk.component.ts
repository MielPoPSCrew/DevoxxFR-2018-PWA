import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FavoriteTalksService } from '../../../../services/favorites.service';
import { Talk } from '../../../../models/talk';
import { environment } from '../../../../../environments/environment'

@Component({
    selector: 'app-schedule-talk',
    templateUrl: './schedule-talk.component.html',
    styleUrls: ['./schedule-talk.component.scss']
})
export class ScheduleTalkComponent implements OnInit {

    @Input('talk') talk: Talk;
    favorited: boolean;
    env = environment;

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
