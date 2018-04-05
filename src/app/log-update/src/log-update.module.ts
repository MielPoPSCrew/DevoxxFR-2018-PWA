import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LogUpdateComponent } from './components/log-update.component';

// Services
import { LogUpdateService } from './services/log-update.service';

@NgModule({
    imports: [
        CommonModule,
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

