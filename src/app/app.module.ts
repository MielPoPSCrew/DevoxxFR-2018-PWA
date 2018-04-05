import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SwUpdate } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

// Custom Modules
import { ScheduleModule } from './schedule';
import { CoreModule } from './core';
import { SpeakerModule } from './speaker';
import { TalkModule } from './talk';
import { LogUpdateModule } from './log-update';

// Custom Components
// TODO remove when routing will be improved
import { ScheduleComponent } from './schedule/src/components/schedule/schedule.component';
import { NotFoundComponent } from './core/src/components/not-found/not-found.component';
import { AboutComponent } from './core/src/components/about/about.component';
import { SpeakersListComponent } from './speaker/src/components/list/speakers-list.component';
import { SpeakerDetailComponent } from './speaker/src/components/detail/speaker-detail.component';
import { TalksListComponent } from './talk/src/components/list/talks-list.component';
import { TalkDetailComponent } from './talk/src/components/detail/talk-detail.component';
import { HomeComponent } from './core/src/components/home/home.component';
import { BookmarksComponent } from './schedule/src/components/bookmarks/bookmarks.component';

// Custom Providers
import { EventsService } from './services/events.service';
import { SpeakersService } from './services/speakers.service';
import { FavoriteTalksService } from './services/favorites.service';

// TODO improve routing with xxx-routing modules
const appRoutes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'talks', component: TalksListComponent },
    { path: 'talks/:talkId', component: TalkDetailComponent },
    { path: 'speakers', component: SpeakersListComponent },
    { path: 'speakers/:speakerId', component: SpeakerDetailComponent },
    { path: 'bookmarks', component: BookmarksComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: NotFoundComponent } // TODO page not found
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        // TODO improve routing with xxx-routing modules
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only
        ),
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        HttpClientModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        // Custom modules
        CoreModule,
        ScheduleModule,
        SpeakerModule,
        TalkModule,
        LogUpdateModule
    ],
    providers: [
        SwUpdate,
        EventsService,
        SpeakersService,
        FavoriteTalksService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
