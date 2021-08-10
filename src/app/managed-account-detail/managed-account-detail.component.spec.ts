import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedAccountDetailComponent } from './managed-account-detail.component';

describe('ManagedAccountDetailComponent', () => {
  let component: ManagedAccountDetailComponent;
  let fixture: ComponentFixture<ManagedAccountDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedAccountDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedAccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
