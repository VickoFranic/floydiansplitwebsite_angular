import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklineComponent } from './backline.component';

describe('BacklineComponent', () => {
  let component: BacklineComponent;
  let fixture: ComponentFixture<BacklineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacklineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
