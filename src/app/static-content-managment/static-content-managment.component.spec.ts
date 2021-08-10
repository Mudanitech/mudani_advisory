import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticContentManagmentComponent } from './static-content-managment.component';

describe('StaticContentManagmentComponent', () => {
  let component: StaticContentManagmentComponent;
  let fixture: ComponentFixture<StaticContentManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticContentManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticContentManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
