import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditThematicComponent } from './edit-thematic.component';

describe('EditThematicComponent', () => {
  let component: EditThematicComponent;
  let fixture: ComponentFixture<EditThematicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditThematicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditThematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
