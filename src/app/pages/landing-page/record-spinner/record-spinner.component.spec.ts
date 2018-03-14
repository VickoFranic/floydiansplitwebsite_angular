import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordSpinnerComponent } from './record-spinner.component';

describe('RecordSpinnerComponent', () => {
  let component: RecordSpinnerComponent;
  let fixture: ComponentFixture<RecordSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
