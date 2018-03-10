import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagePlanComponent } from './stage-plan.component';

describe('StagePlanComponent', () => {
  let component: StagePlanComponent;
  let fixture: ComponentFixture<StagePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
