import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

import { mockAPITalk } from '../../../../mocks/mockAPITalk';
@Component({
    selector: 'app-talk-detail',
    templateUrl: './talk-detail.component.html',
    styleUrls: ['./talk-detail.component.scss']
})
export class TalkDetailComponent implements OnInit {

    env = environment;
    displayedColumns = ['name'];
    public talk = mockAPITalk;

    constructor() { }

    ngOnInit() { 
        console.log(this.talk);
    }

}
