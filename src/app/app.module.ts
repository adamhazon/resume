import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RootStoreModule } from './root-store';
import { AppComponent } from './app.component';
import { RolesService } from './services/roles.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RolesListComponent, RoleDetailsComponent } from './components/roles';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    RolesListComponent,
    RoleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RootStoreModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [RolesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
