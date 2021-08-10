import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseCashComponent } from './raise-cash.component';

describe('RaiseCashComponent', () => {
  let component: RaiseCashComponent;
  let fixture: ComponentFixture<RaiseCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiseCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
