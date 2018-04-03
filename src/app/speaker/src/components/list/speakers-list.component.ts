import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { mockAPISpeakers } from '../../../../mocks/mockAPISpeakers';

@Component({
    selector: 'app-speakers-list',
    templateUrl: './speakers-list.component.html',
    styleUrls: ['./speakers-list.component.scss']
})
export class SpeakersListComponent implements OnInit, OnDestroy {

    displayedColumns = ['avatar', 'firstName', 'lastName'];
    dataSource: MatTableDataSource<any>;
    mobileQuery: MediaQueryList;

    private _mobileQueryListener: () => void;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
     }

    ngOnInit() {
        console.log(mockAPISpeakers);
        this.dataSource = new MatTableDataSource(mockAPISpeakers);
     }

    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();
      this.dataSource.filter = filterValue;
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
