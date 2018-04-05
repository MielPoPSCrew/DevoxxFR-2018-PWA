import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleBreakComponent } from './schedule-break.component';

describe('ScheduleBreakComponent', () => {
  let component: ScheduleBreakComponent;
  let fixture: ComponentFixture<ScheduleBreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleBreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
