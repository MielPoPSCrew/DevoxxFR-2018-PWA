import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { environment } from '../../../../../environments/environment';
import { EventsService } from '../../../../services/events.service';

@Component({
    selector: 'app-talks-list',
    templateUrl: './talks-list.component.html',
    styleUrls: ['./talks-list.component.scss']
})
export class TalksListComponent implements OnInit, OnDestroy {

    displayedColumns = ['type', 'lang', 'title'];
    talksData = null;
    dataSource = new MatTableDataSource();
    mobileQuery: MediaQueryList;
    env = environment;

    private _mobileQueryListener: () => void;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private media: MediaMatcher,
        private eventsService: EventsService) {
            this.mobileQuery = media.matchMedia('(max-width: 600px)');
            this._mobileQueryListener = () => changeDetectorRef.detectChanges();
            this.mobileQuery.addListener(this._mobileQueryListener);
            this.dataSource.filterPredicate = function(data: any, filter: string){
                var ret = true;
                filter.split(' ').forEach((d)=>{
                    if(data.talk.title.toUpperCase().indexOf(d.toUpperCase()) === -1){
                        ret = false;
                        return;
                    }
                });
                return ret;
            }
    }

    ngOnInit() {
        this.eventsService.getTalks().subscribe((data) => {
            this.talksData = data;
            this.dataSource.data = this.talksData;
            console.log(this.talksData);
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

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
