import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentSubmissionComponent } from './view-student-submission.component';

describe('ViewStudentSubmissionComponent', () => {
  let component: ViewStudentSubmissionComponent;
  let fixture: ComponentFixture<ViewStudentSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStudentSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
