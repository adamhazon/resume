import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDatepicker } from '@angular/material';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Role } from '../../../models';
import { RootStoreState, RolesStoreActions } from '../../../root-store';

import * as moment from 'moment';

// tslint:disable-next-line:no-duplicate-imports
import { Moment } from 'moment';

export interface DialogData {
  type: string;
  role?: Role;
}

const MY_FORMATS = {
  parse: {
    dateInput: 'MM-YYYY',
  },
  display: {
    dateInput: 'MM-YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-add-or-edit-role-dialog',
  templateUrl: './add-or-edit-dialog.component.html',
  styleUrls: ['./add-or-edit-dialog.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class AddOrEditRoleDialogComponent implements OnInit {

  public roleForm: FormGroup;

  constructor(
    private store$: Store<RootStoreState.State>,
    private dialogRef: MatDialogRef<AddOrEditRoleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    this.roleForm = new FormGroup({
      'rolePositionControl': new FormControl(
        this.data.type === 'edit' ?
        this.data.role.position :
        null, Validators.required
      ),
      'roleCompanyControl': new FormControl(
        this.data.type === 'edit' ?
        this.data.role.company :
        null, Validators.required
      ),
      'roleStartDateControl': new FormControl(
        this.data.type === 'edit' ?
        this.validateDate(moment(this.data.role.startDate)) :
        null, Validators.required
      ),
      'roleEndDateControl': new FormControl(
        this.data.type === 'edit' ?
        this.validateDate(moment(this.data.role.endDate)) :
        null
      )
    });
  }

  onSubmit() {
    this.dialogRef.close();
    const newRole = {
      position: this.roleForm.get('rolePositionControl').value,
      company: this.roleForm.get('roleCompanyControl').value,
      startDate: this.roleForm.get('roleStartDateControl').value,
      endDate: this.roleForm.get('roleEndDateControl').value
    };
    if (this.data.type === 'edit') {
      newRole['id'] = this.data.role.id;
      this.store$.dispatch(
        new RolesStoreActions.UpdateRequestAction(newRole)
      );
    } else if (this.data.type === 'add') {
      this.store$.dispatch(
        new RolesStoreActions.CreateRequestAction(newRole)
      );
    }
  }

  chosenYearHandler(normalizedYear: Moment, controlName: string) {
    const ctrlValue = this.roleForm.controls[controlName].value || moment('2019-01');
    ctrlValue.year(normalizedYear.year());
    this.roleForm.controls[controlName].setValue(ctrlValue);
  }

  chosenMonthHandler(normlizedMonth: Moment, controlName: string, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.roleForm.controls[controlName].value || moment('2019-01');
    ctrlValue.month(normlizedMonth.month());
    this.roleForm.controls[controlName].setValue(ctrlValue);
    datepicker.close();
  }

  get roleFormPosition() {
    return this.roleForm.get('rolePositionControl');
  }

  get roleFormCompany() {
    return this.roleForm.get('roleCompanyControl');
  }

  private validateDate(date: moment.Moment): moment.Moment | null {
    return moment(date, 'MM-YYYY', true).isValid()
    ? moment(date)
    : null;
  }

}