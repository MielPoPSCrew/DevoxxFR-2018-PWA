import { Component, OnInit } from '@angular/core';
import { LogUpdateService } from '../../services/log-update.service';

@Component({
  selector: 'app-log-update',
  templateUrl: './log-update.component.html',
  styleUrls: ['./log-update.component.css']
})
export class LogUpdateComponent implements OnInit {

  updateAvailable: boolean;

  constructor(private updateService: LogUpdateService) { }

  ngOnInit() {
    this.updateService.updateAvailable.subscribe(
      (data) => this.updateAvailable = data
    );
  }

}
