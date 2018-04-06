import { Component, OnInit } from '@angular/core';
import { LogUpdateService } from '../services/log-update.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-log-update',
    templateUrl: './log-update.component.html',
    styleUrls: ['./log-update.component.scss']
})
export class LogUpdateComponent implements OnInit {

    constructor(private updateService: LogUpdateService, private snackBar: MatSnackBar) { }

    ngOnInit() {
        this.updateService.updateAvailable.subscribe(
            (data) => this.onUpdateAvailable()
        );
    }

    private onUpdateAvailable(): void {
        const snake = this.snackBar.open('Une mise à jour est disponible, actualisez ;)', 'J\'ai compris');
        snake.onAction().subscribe(action => snake.dismiss());
    }

}
