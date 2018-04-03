import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    MatCardModule
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
    MatCardModule
];

@NgModule({
    imports: [
        CommonModule,
        ...MATERIAL_MODULES
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SpeakerModule { }
