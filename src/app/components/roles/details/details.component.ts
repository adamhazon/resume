import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { AddOrEditRoleDialogComponent } from '../add-or-edit-dialog';
import { Role } from '../../../models';
import { RootStoreState,
         RolesStoreActions,
         RolesStoreSelectors } from '../../../root-store';

@Component({
  selector: 'app-role-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class RoleDetailsComponent implements OnInit, OnDestroy {

  public role$: Observable<Role>;
  public role: Role;

  private unsubscribe$: Subject<any> = new Subject();
  private currentRoleId: number;

  constructor(
    private store$: Store<RootStoreState.State>,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe(params => {
      this.currentRoleId = +params['id'];
      this.role$ = this.store$.select(
        RolesStoreSelectors.selectRoleById(+params['id'])
      );
    });

    this.role$.pipe(takeUntil(this.unsubscribe$)).subscribe(role => {
      if (!role) {
        this.store$.dispatch(
          new RolesStoreActions.LoadOneRequestAction(this.currentRoleId)
        );
      } else {
        this.role = role;
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  editRole(role: Role) {
    event.stopPropagation();
    this.dialog.open(AddOrEditRoleDialogComponent, {
      width: '600px',
      maxWidth: '95vw',
      data: {type: 'edit', role: role}
    });
  }

}
