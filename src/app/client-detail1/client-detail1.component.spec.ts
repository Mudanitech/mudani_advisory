import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetail1Component } from './client-detail1.component';

describe('ClientDetail1Component', () => {
  let component: ClientDetail1Component;
  let fixture: ComponentFixture<ClientDetail1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDetail1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
