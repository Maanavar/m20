import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptCourseComponent } from './dept-course.component';

describe('DeptCourseComponent', () => {
  let component: DeptCourseComponent;
  let fixture: ComponentFixture<DeptCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
