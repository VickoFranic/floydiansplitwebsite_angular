import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBookingComponent } from './contact-booking.component';

describe('ContactBookingComponent', () => {
  let component: ContactBookingComponent;
  let fixture: ComponentFixture<ContactBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
