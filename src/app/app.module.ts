import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { TestComponent } from './test/test.component';
import { DataCrawlerService } from './data-crawler.service';
import { HttpClientModule } from '@angular/common/http';
import { LogUpdateComponent } from './components/log-update/log-update.component';
import { LogUpdateService } from './services/log-update.service';
import { SwUpdate } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LogUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [SwUpdate, LogUpdateService, DataCrawlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
