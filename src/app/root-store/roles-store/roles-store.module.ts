import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RolesStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('roles', featureReducer),
    EffectsModule.forFeature([ RolesStoreEffects ])
  ],
  providers: [ RolesStoreEffects ]
})
export class RolesStoreModule { }
