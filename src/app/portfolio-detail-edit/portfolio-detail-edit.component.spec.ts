import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailEditComponent } from './portfolio-detail-edit.component';

describe('PortfolioDetailEditComponent', () => {
  let component: PortfolioDetailEditComponent;
  let fixture: ComponentFixture<PortfolioDetailEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioDetailEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
