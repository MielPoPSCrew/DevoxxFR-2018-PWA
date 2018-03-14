import { Component, OnInit } from '@angular/core';

import { DataCrawlerService } from '../data-crawler.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private data: string;

  constructor(private dataService: DataCrawlerService) { }

  getData() {
    console.log(this.data);
    return "DONE";
  }

  ngOnInit() {
    this.dataService.getSpeakers().subscribe( 
      (data) => {
        data.forEach(speaker => {
          speaker.lastName = speaker.lastName.charAt(0).toUpperCase() + speaker.lastName.slice(1).toLowerCase();
          speaker.firstName = speaker.firstName.charAt(0).toUpperCase() + speaker.firstName.slice(1).toLowerCase();
        });
        this.data = data.sort((a,b) => {
          if(a.lastName < b.lastName) {
            return -1;
          }
          if(a.lastName > b.lastName) {
            return 1;
          }
          return 0;
        });
      }
    );
  }

}
