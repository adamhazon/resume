import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';

import { Role } from '../../models/';
import { RolesService } from '../../services/roles.service';
import { RolesStoreEffects } from './effects';
import { RootStoreModule } from '../../root-store';
import * as RolesActions from './actions';

describe('RolesEffects', () => {
  let effects: RolesStoreEffects;
  let actions: ReplaySubject<any>;
  let service: RolesService;
  let roles: Role[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RootStoreModule,
      ],
      providers: [
        RolesService,
        RolesStoreEffects,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(RolesStoreEffects);
    service = TestBed.get(RolesService);
    service.getRoles().subscribe(items => {
      roles = items;
    });
  });

  it('should load roles on request', () => {
    actions = new ReplaySubject(1);
    actions.next(new RolesActions.LoadRequestAction());

    effects.loadRolesEffect$.subscribe(result => {
      expect(result).toEqual(new RolesActions.LoadSuccessAction({
        items: roles
      }));
    });
  });

});
