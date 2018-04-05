import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SchedulePeriodeComponent } from './components/schedule-periode/schedule-periode.component';
import { ScheduleTalkComponent } from './components/schedule-talk/schedule-talk.component';
import { ScheduleBreakComponent } from './components/schedule-break/schedule-break.component';
import { InfoModalComponent } from './components/info-modal/info-modal.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';

// Material
import {
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatSidenavModule,
    MatTabsModule
} from '@angular/material';

export const COMPONENTS = [
    ScheduleComponent,
    SchedulePeriodeComponent,
    ScheduleTalkComponent,
    ScheduleBreakComponent,
    InfoModalComponent,
    BookmarksComponent
];

const MATERIAL_MODULES = [
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatSidenavModule,
    MatTabsModule
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ...MATERIAL_MODULES
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class ScheduleModule { }

