import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditRoleDialogComponent } from './add-or-edit-dialog.component';

describe('AddOrEditRoleDialogComponent', () => {
  let component: AddOrEditRoleDialogComponent;
  let fixture: ComponentFixture<AddOrEditRoleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditRoleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditRoleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
