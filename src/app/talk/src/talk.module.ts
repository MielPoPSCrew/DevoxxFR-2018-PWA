import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core';

// Components
import { TalksListComponent } from './components/list/talks-list.component';
import { TalkDetailComponent } from './components/detail/talk-detail.component';

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
    MatTooltipModule
} from '@angular/material';

export const COMPONENTS = [
    TalksListComponent,
    TalkDetailComponent
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
        CoreModule,
        ...MATERIAL_MODULES
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class TalkModule { }
