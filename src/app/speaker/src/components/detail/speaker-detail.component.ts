import { Component, OnInit } from '@angular/core';
import { SpeakersService } from '../../../../services/speakers.service';
import { ActivatedRoute } from '@angular/router';

import { mockAPISpeaker } from '../../../../mocks/mockAPISpeaker';

@Component({
    selector: 'app-speaker',
    templateUrl: './speaker-detail.component.html',
    styleUrls: ['./speaker-detail.component.scss']
})
export class SpeakerDetailComponent implements OnInit {

    displayedColumns = ['type', 'title'];
    public speaker: any;

    constructor(
        activatedRoute: ActivatedRoute,
        speakersService: SpeakersService) {

            activatedRoute.params.subscribe((params) => {
                const id = params['speakerId'];
                console.log(id);
                speakersService.getSpeaker(id).subscribe((data) => {
                    this.speaker = data;
                    console.log(this.speaker);
                });
            });
    }

    ngOnInit() { }
}
