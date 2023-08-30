import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

import * as authContainers from './containers';
import * as authServices from './services';
import { PersistanceService } from '@shared/services/persistance.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { LoginEffect } from './store/effects/login.effect';
import { LogoutEffect } from './store/effects/logout.effect';
import { RegisterEffect } from './store/effects/register.effect';

@NgModule({
  declarations: [...authContainers.containers],
  imports: [
    CommonModule,
    RouterModule,
    AppCommonModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NavigationModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([LoginEffect, LogoutEffect, RegisterEffect]),
  ],
  exports: [...authContainers.containers],
  providers: [...authServices.services, PersistanceService],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
    };
  }
}
