import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertDetailsModalComponent } from './concert-details-modal.component';

describe('ConcertDetailsModalComponent', () => {
  let component: ConcertDetailsModalComponent;
  let fixture: ComponentFixture<ConcertDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
