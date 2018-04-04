import { Component, OnInit } from '@angular/core';

import { mockAPITalk } from '../../../../mocks/mockAPITalk';
@Component({
    selector: 'app-talk-detail',
    templateUrl: './talk-detail.component.html',
    styleUrls: ['./talk-detail.component.scss']
})
export class TalkDetailComponent implements OnInit {

    displayedColumns = ['name'];
    public talk = mockAPITalk;

    constructor() { }

    ngOnInit() { }

}
