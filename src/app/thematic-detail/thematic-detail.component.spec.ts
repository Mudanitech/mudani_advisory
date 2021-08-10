import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThematicDetailComponent } from './thematic-detail.component';

describe('ThematicDetailComponent', () => {
  let component: ThematicDetailComponent;
  let fixture: ComponentFixture<ThematicDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThematicDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThematicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
