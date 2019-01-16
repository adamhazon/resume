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
        // Check if roles already in the store, if not dispatch the action to load them
        if (!state.hasLoaded) {
          this.store$.dispatch(
            new RolesStoreActions.LoadRequestAction()
          );
        }
      });

    // Load the roles from the store
    this.rolesList$ = this.store$.select(
      RolesStoreSelectors.selectAllRolesItems
    );

    // Used to errors handling
    this.error$ = this.store$.select(
      RolesStoreSelectors.selectRolesError
    );

    // Used to show loading indicator
    this.isLoading$ = this.store$.select(
      RolesStoreSelectors.selectRolesIsLoading
    );
  }

  // Open a dialog to create a new role
  addRole() {
    this.dialog.open(AddOrEditRoleDialogComponent, {
      width: '600px',
      maxWidth: '95vw',
      data: {type: 'add'}
    });
  }

  // Open a dialog to edit an existing role
  editRole(e, role: Role) {
    e.stopPropagation();
    this.dialog.open(AddOrEditRoleDialogComponent, {
      width: '600px',
      maxWidth: '95vw',
      data: {type: 'edit', role: role}
    });
  }

  // Deleting a role with a confirm popup
  deleteRole(e, role: Role) {
    e.stopPropagation();
    if ( confirm(`Role "${role.position}" will be deleted.`) ) {
      this.store$.dispatch(
        new RolesStoreActions.DeleteRequestAction(role.id)
      );
    }
  }

}
