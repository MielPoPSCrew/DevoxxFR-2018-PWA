import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { environment } from '../../../../../environments/environment'

import { mockAPITalks } from '../../../../mocks/mockAPITalks';

@Component({
    selector: 'app-talks-list',
    templateUrl: './talks-list.component.html',
    styleUrls: ['./talks-list.component.scss']
})
export class TalksListComponent implements OnInit, OnDestroy {

    displayedColumns = ['type', 'lang', 'title'];
    dataSource: MatTableDataSource<any>;
    mobileQuery: MediaQueryList;
    env = environment;

    private _mobileQueryListener: () => void;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnInit() {
        console.log('mockAPITalks', mockAPITalks);
        this.dataSource = new MatTableDataSource(mockAPITalks);
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
