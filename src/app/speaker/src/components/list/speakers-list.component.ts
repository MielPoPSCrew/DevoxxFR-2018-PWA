import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SpeakersService } from '../../../../services/speakers.service';

@Component({
    selector: 'app-speakers-list',
    templateUrl: './speakers-list.component.html',
    styleUrls: ['./speakers-list.component.scss']
})
export class SpeakersListComponent implements OnInit, OnDestroy {

    displayedColumns = ['avatar', 'firstName', 'lastName'];
    speakersData = null;
    dataSource = new MatTableDataSource();
    mobileQuery: MediaQueryList;

    private _mobileQueryListener: () => void;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private media: MediaMatcher,
        private speakersService: SpeakersService) {

            this.mobileQuery = media.matchMedia('(max-width: 600px)');
            this._mobileQueryListener = () => changeDetectorRef.detectChanges();
            this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnInit() {
        this.speakersService.getSpeakers().subscribe((data) => {
            this.speakersData = data;
            this.dataSource.data = this.speakersData;
        });
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

    errorHandler(event) {
        event.target.src = '/assets/default_black.png';
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
