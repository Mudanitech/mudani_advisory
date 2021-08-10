import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingPortfolioComponent } from './matching-portfolio.component';

describe('MatchingPortfolioComponent', () => {
  let component: MatchingPortfolioComponent;
  let fixture: ComponentFixture<MatchingPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchingPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
