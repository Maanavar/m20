import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAssignmentListsComponent } from './student-assignment-lists.component';

describe('StudentAssignmentListsComponent', () => {
  let component: StudentAssignmentListsComponent;
  let fixture: ComponentFixture<StudentAssignmentListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAssignmentListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAssignmentListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
