import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfDirectedDetailComponent } from './self-directed-detail.component';

describe('SelfDirectedDetailComponent', () => {
  let component: SelfDirectedDetailComponent;
  let fixture: ComponentFixture<SelfDirectedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfDirectedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfDirectedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
