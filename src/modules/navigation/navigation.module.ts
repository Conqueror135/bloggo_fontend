import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '@common/app-common.module';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import * as appCommonLayouts from './layouts';
import * as navigationContainers from './containers';
@NgModule({
  declarations: [
    ...navigationContainers.containers,
    ...appCommonLayouts.layouts,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppCommonModule,
    CollapseModule.forRoot(),
  ],
  exports: [...appCommonLayouts.layouts],
})
export class NavigationModule {
  static forRoot(): ModuleWithProviders<NavigationModule> {
    return {
      ngModule: NavigationModule,
    };
  }
}
