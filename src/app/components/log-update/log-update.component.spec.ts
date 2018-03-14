import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogUpdateComponent } from './log-update.component';

describe('LogUpdateComponent', () => {
  let component: LogUpdateComponent;
  let fixture: ComponentFixture<LogUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
