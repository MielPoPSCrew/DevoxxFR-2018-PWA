import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { InfoModalComponent } from '../info-modal/info-modal.component';
@Component({
    selector: 'app-schedule-talk',
    templateUrl: './schedule-talk.component.html',
    styleUrls: ['./schedule-talk.component.scss']
})
export class ScheduleTalkComponent implements OnInit {

    @Input('talk') talk: String;

    constructor() { }

    ngOnInit() {
        console.log(this.talk);
    }

    bookmarkTalk(talkId: string) {
        console.log('bookmarkTalk', talkId);
    }
}
