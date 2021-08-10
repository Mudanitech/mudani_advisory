import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestCashComponent } from './invest-cash.component';

describe('InvestCashComponent', () => {
  let component: InvestCashComponent;
  let fixture: ComponentFixture<InvestCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestCashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
