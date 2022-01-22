import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcBillComponent } from './pc-bill.component';

describe('PcBillComponent', () => {
  let component: PcBillComponent;
  let fixture: ComponentFixture<PcBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
