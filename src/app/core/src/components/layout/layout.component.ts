import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

// TODO remove to env config file
const env = {
    menu: [
        { title: 'Home', icon: 'home', link: '', withDivider: true },
        { title: 'Full Schedule', icon: 'today', link: 'schedule', withDivider: false },
        { title: 'Your schedule', icon: 'favorite', link: 'bookmarks', withDivider: true },
        { title: 'Speakers', icon: 'person', link: 'speakers', withDivider: false },
        { title: 'Talks', icon: 'school', link: 'talks', withDivider: true },
        { title: 'About', icon: 'help', link: 'about', withDivider: false }
    ]
};

@Component({
    selector: 'app-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.scss'],
})
export class LayoutComponent implements OnDestroy {
    mobileQuery: MediaQueryList;

    private _mobileQueryListener: () => void;
    public menu = env.menu;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

}