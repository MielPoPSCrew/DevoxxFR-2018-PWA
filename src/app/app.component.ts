import { Component } from '@angular/core';
import { RoomsService } from './services/rooms.service';
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
        private rooms: RoomsService,
        private events: EventsService,
        private speakers: SpeakersService,
    ) { }
}
