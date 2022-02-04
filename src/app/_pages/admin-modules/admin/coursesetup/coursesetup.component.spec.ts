import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesetupComponent } from './coursesetup.component';

describe('CoursesetupComponent', () => {
  let component: CoursesetupComponent;
  let fixture: ComponentFixture<CoursesetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
