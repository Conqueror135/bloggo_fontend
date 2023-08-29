import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

import * as authContainers from './containers';
import * as authServices from './services';

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
  ],
  exports: [...authContainers.containers],
  providers: [...authServices.services],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
    };
  }
}
