import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';

import { RootStoreModule, RootStoreState, RolesStoreActions } from '../../../root-store';
import { RolesService } from '../../../services/roles.service';

import { AddOrEditRoleDialogComponent } from './add-or-edit-dialog.component';

describe('AddOrEditRoleDialogComponent', () => {
  let component: AddOrEditRoleDialogComponent;
  let fixture: ComponentFixture<AddOrEditRoleDialogComponent>;
  let store: Store<RootStoreState.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatDialogModule,
        MatMomentDateModule,
        BrowserAnimationsModule,
        RootStoreModule
      ],
      declarations: [
        AddOrEditRoleDialogComponent
      ],
      providers: [
        MatMomentDateModule,
        RolesService,
        { provide: MatDialogRef, useValue: { close() {} } },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ]
    })
    .compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditRoleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update a role', () => {
    component.data = {
      type: 'edit',
      role: {
        id: 1,
        position: 'position',
        company: 'company',
        startDate: '2018-01',
        endDate: '2019-01'
      }
    };
    const position = component.roleForm.controls['rolePositionControl'];
    position.setValue('updated');

    component.onSubmit();
    const action = new RolesStoreActions.UpdateRequestAction({
      position: 'updated',
      company: null,
      startDate: null,
      endDate: null,
      current: null,
      description: null,
      id: 1
    });

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
