import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesFoldersComponent } from './files-folders.component';

describe('FilesFoldersComponent', () => {
  let component: FilesFoldersComponent;
  let fixture: ComponentFixture<FilesFoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesFoldersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
