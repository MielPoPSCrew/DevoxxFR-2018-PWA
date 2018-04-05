import { Component } from '@angular/core';
import { EventsService } from './services/events.service';
import { SpeakersService } from './services/speakers.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    // Retrieved data when application start
    constructor(
        private events: EventsService,
        private speakers: SpeakersService,
    ) { }
}
