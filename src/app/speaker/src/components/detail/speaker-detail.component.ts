import { Component, OnInit } from '@angular/core';

import { mockAPISpeaker } from '../../../../mocks/mockAPISpeaker';

@Component({
    selector: 'app-speaker',
    templateUrl: './speaker-detail.component.html',
    styleUrls: ['./speaker-detail.component.scss']
})
export class SpeakerDetailComponent implements OnInit {

    displayedColumns = ['title', 'track'];
    public speaker = mockAPISpeaker;

    constructor() { }

    ngOnInit() {
        console.log('mockAPISpeaker', mockAPISpeaker);
    }

}
