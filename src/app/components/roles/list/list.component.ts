import { Component, OnInit } from '@angular/core';

import { Role } from '../../../models/role.model';
import { RolesService } from '../../../services/roles.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public loading = false;
  public roles: Role[];

  constructor(private service: RolesService) { }

  ngOnInit() {
    this.service.getRoles().subscribe(roles => this.roles = roles);
  }

  addRole() {
    console.log('Add Role');
  }

  editRole(role: Role) {
    console.log('Edit Role');
  }

  deleteRole(role: Role) {
    console.log('Delete Role');
  }

}
