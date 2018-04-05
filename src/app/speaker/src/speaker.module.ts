import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { SpeakersListComponent } from './components/list/speakers-list.component';
import { SpeakerDetailComponent } from './components/detail/speaker-detail.component';

// Material
import {
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
} from '@angular/material';

export const COMPONENTS = [
    SpeakersListComponent,
    SpeakerDetailComponent
];

const MATERIAL_MODULES = [
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule
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
export class SpeakerModule { }
