import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorCourseListingComponent } from './instructor-course-listing.component';

describe('InstructorCourseListingComponent', () => {
  let component: InstructorCourseListingComponent;
  let fixture: ComponentFixture<InstructorCourseListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorCourseListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorCourseListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
