import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Role } from '../models/role.model';
import { RolesMock } from './roles.mock';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor() { }

  // Get all roles
  getRoles(): Observable<Role[]> {
    return of(RolesMock);
  }

  // Get one role by id
  public getRoleById(id: number): Observable<Role> {
    return of(RolesMock.filter(role => role.id === id)[0]);
  }

  // Update a role
  public updateRole(role: Role): Observable<Role> {
    return of(role);
  }

  // Create a new role
  public createRole(role: Role): Observable<Role> {
    role.id = +new Date();
    return of(role);
  }

  // Delete a role
  public deleteRole(id: number): Observable<number> {
    return of(id);
  }
}
