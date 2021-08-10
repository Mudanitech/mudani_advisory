import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThematicComponent } from './create-thematic.component';

describe('CreateThematicComponent', () => {
  let component: CreateThematicComponent;
  let fixture: ComponentFixture<CreateThematicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateThematicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateThematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
