import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { AddOrEditRoleDialogComponent } from '../add-or-edit-dialog';
import { Role } from '../../../models/role.model';
import { RootStoreState,
         RolesStoreActions,
         RolesStoreSelectors } from '../../../root-store';

@Component({
  selector: 'app-roles-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class RolesListComponent implements OnInit {

  public rolesList$: Observable<Role[]>;
  public error$: Observable<string>;
  public isLoading$: Observable<boolean>;

  constructor(
    private dialog: MatDialog,
    private store$: Store<RootStoreState.State>
  ) { }

  ngOnInit() {
    this.store$.select(RolesStoreSelectors.selectRolesState).pipe(take(1))
      .subscribe(state => {
        if (!state.hasLoaded) {
          this.store$.dispatch(
            new RolesStoreActions.LoadRequestAction()
          );
        }
      });

    this.rolesList$ = this.store$.select(
      RolesStoreSelectors.selectAllRolesItems
    );

    this.error$ = this.store$.select(
      RolesStoreSelectors.selectRolesError
    );

    this.isLoading$ = this.store$.select(
      RolesStoreSelectors.selectRolesIsLoading
    );
  }

  addRole() {
    this.dialog.open(AddOrEditRoleDialogComponent, {
      width: '600px',
      maxWidth: '95vw',
      data: {type: 'add'}
    });
  }

  editRole(role: Role) {
    event.stopPropagation();
    this.dialog.open(AddOrEditRoleDialogComponent, {
      width: '600px',
      maxWidth: '95vw',
      data: {type: 'edit', role: role}
    });
  }

  deleteRole(role: Role) {
    event.stopPropagation();
    if ( confirm(`Role "${role.position}" will be deleted.`) ) {
      this.store$.dispatch(
        new RolesStoreActions.DeleteRequestAction(role.id)
      );
    }
  }

}
