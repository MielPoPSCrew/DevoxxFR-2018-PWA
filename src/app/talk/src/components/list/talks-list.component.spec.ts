import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksListComponent } from './talks-list.component';

describe('TalksListComponent', () => {
  let component: TalksListComponent;
  let fixture: ComponentFixture<TalksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
