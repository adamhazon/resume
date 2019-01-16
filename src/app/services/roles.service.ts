import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  public roleMock = {
    id: 1,
    company: 'Seerene Inc',
    position: 'Senior Software Engineer',
    startDate: '2017-05',
    endDate: '2018-12',
    current: false,
    description: `
      • Worked in a SCRUM team, mainly on the Front-end side using Angular 4-6.
      • Developed new features, improved old features and fixed some bugs.
      • Developed from scratch the new version of the platform with Angular CLI & NgRx.
      • All the styling guideline was implemented using Angular Material 2 and FlexBox.
      • I worked closely with the design team to make sure everything looks and feels clean, consistent and
        professional.
      • I was part of the PERFORMANCE TEAM and I improved a lot the UX & FE speed.
    `
  };

  constructor() { }

  getRoles(): Observable<Role[]> {
    const rolesList: Role[] = [];

    for (let i = 1; i < 6; i++) {
      const role: Role = {...this.roleMock};
      role.id = i;
      rolesList.push(role);
    }

    return of(rolesList);
  }

  public getRoleById(id: number): Observable<Role> {
    return of(this.roleMock);
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
