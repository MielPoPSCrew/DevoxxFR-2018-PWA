import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-info-modal',
    templateUrl: './info-modal.component.html',
    styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {

    @ViewChild('infonav') modal;

    constructor() { }

    ngOnInit() { }

}
