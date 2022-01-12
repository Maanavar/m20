import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectFolderComponent } from './subject-folder.component';

describe('SubjectFolderComponent', () => {
  let component: SubjectFolderComponent;
  let fixture: ComponentFixture<SubjectFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
