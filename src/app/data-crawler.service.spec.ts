import { TestBed, inject } from '@angular/core/testing';

import { DataCrawlerService } from './data-crawler.service';

describe('DataCrawlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataCrawlerService]
    });
  });

  it('should be created', inject([DataCrawlerService], (service: DataCrawlerService) => {
    expect(service).toBeTruthy();
  }));
});
