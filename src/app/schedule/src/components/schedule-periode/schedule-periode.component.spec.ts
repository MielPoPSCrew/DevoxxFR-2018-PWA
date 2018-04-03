import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePeriodeComponent } from './schedule-periode.component';

describe('SchedulePeriodeComponent', () => {
    let component: SchedulePeriodeComponent;
    let fixture: ComponentFixture<SchedulePeriodeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SchedulePeriodeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SchedulePeriodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
