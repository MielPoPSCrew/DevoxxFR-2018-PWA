import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    MatIconModule
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
    MatIconModule
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
export class TalkModule { }
