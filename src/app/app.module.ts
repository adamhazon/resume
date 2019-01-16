import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RootStoreModule } from './root-store';
import { AppComponent } from './app.component';
import { RolesService } from './services/roles.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RolesListComponent, RoleDetailsComponent } from './components/roles';
import { AddOrEditRoleDialogComponent } from './components/roles/add-or-edit-dialog/add-or-edit-dialog.component';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    RolesListComponent,
    RoleDetailsComponent,
    AddOrEditRoleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RootStoreModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  entryComponents: [
    AddOrEditRoleDialogComponent
  ],
  providers: [
    RolesService,
    MatMomentDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
