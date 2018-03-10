import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressPackComponent } from './press-pack.component';

describe('PressPackComponent', () => {
  let component: PressPackComponent;
  let fixture: ComponentFixture<PressPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
