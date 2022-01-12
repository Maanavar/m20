import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideFolderComponent } from './inside-folder.component';

describe('InsideFolderComponent', () => {
  let component: InsideFolderComponent;
  let fixture: ComponentFixture<InsideFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
