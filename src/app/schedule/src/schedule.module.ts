import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SchedulePeriodeComponent } from './components/schedule-periode/schedule-periode.component';
import { ScheduleTalkComponent } from './components/schedule-talk/schedule-talk.component';
import { InfoModalComponent } from './components/info-modal/info-modal.component';

// Material
import {
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatSidenavModule
} from '@angular/material';

export const COMPONENTS = [
    ScheduleComponent,
    SchedulePeriodeComponent,
    ScheduleTalkComponent,
    InfoModalComponent
];

const MATERIAL_MODULES = [
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatSidenavModule
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

