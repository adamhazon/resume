import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Role } from '../models/role.model';
import { RolesMock } from './roles.mock';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor() { }

  getRoles(): Observable<Role[]> {
    return of(RolesMock);
  }

  public getRoleById(id: number): Observable<Role> {
    return of(RolesMock.filter(role => role.id === id)[0]);
  }

  public updateRole(role: Role): Observable<Role> {
    return of(role);
  }

  public createRole(role: Role): Observable<Role> {
    role.id = 6;
    return of(role);
  }

  public deleteRole(id: number): Observable<number> {
    return of(id);
  }
}
