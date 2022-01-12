import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentFileComponent } from './assignment-file.component';

describe('AssignmentFileComponent', () => {
  let component: AssignmentFileComponent;
  let fixture: ComponentFixture<AssignmentFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
