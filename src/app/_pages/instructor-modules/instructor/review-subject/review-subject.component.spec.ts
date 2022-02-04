import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSubjectComponent } from './review-subject.component';

describe('ReviewSubjectComponent', () => {
  let component: ReviewSubjectComponent;
  let fixture: ComponentFixture<ReviewSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
