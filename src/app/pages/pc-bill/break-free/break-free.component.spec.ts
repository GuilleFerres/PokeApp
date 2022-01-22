import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakFreeComponent } from './break-free.component';

describe('BreakFreeComponent', () => {
  let component: BreakFreeComponent;
  let fixture: ComponentFixture<BreakFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakFreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
