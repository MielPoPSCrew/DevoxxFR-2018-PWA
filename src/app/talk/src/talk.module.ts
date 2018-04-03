import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { TalksListComponent } from './components/list/talks-list.component';
import { TalkDetailComponent } from './components/detail/talk-detail.component';

// Material
import {

} from '@angular/material';

export const COMPONENTS = [
    TalksListComponent,
    TalkDetailComponent
];

const MATERIAL_MODULES = [

];

@NgModule({
    imports: [
        CommonModule,
        ...MATERIAL_MODULES
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class TalkModule { }
