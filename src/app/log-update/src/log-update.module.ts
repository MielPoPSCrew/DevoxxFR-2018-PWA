import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LogUpdateComponent } from './components/log-update.component';

// Services
import { LogUpdateService } from './services/log-update.service';

// Material
import {MatSnackBarModule} from '@angular/material/snack-bar';

const MATERIAL_MODULES = [
    MatSnackBarModule
];

@NgModule({
    imports: [
        CommonModule,
        ...MATERIAL_MODULES
    ],
    declarations: [
        LogUpdateComponent
    ],
    exports : [
        LogUpdateComponent
    ],
    providers: [
        LogUpdateService
    ]
})
export class LogUpdateModule { }

