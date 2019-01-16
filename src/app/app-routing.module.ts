import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolesListComponent, RoleDetailsComponent } from './components/roles';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'role/:id', component: RoleDetailsComponent },
  { path: '', component: RolesListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
