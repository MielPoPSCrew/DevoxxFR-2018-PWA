import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTalkComponent } from './schedule-talk.component';

describe('ScheduleTalkComponent', () => {
    let component: ScheduleTalkComponent;
    let fixture: ComponentFixture<ScheduleTalkComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ScheduleTalkComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ScheduleTalkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
