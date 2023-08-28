import {
  NgModule,
  APP_INITIALIZER,
  ModuleWithProviders,
  SecurityContext,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsModule } from '@modules/icons/icons.module';
import { MarkdownModule } from 'ngx-markdown';
import { ModalComponent } from './components';
// import * as appCommonComponents from './components';

const thirdParty = [IconsModule];

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    ...thirdParty,
    MarkdownModule.forRoot({ sanitize: SecurityContext.NONE }),
  ],
  exports: [ModalComponent, ...thirdParty],
})
export class AppCommonModule {
  static forRoot(): ModuleWithProviders<AppCommonModule> {
    return { ngModule: AppCommonModule };
  }
}
