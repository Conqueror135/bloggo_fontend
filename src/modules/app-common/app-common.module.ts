import {
  NgModule,
  APP_INITIALIZER,
  ModuleWithProviders,
  SecurityContext,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { IconsModule } from '@modules/icons/icons.module';
import { MarkdownModule } from 'ngx-markdown';
import { ModalComponent } from './components';
// import * as appCommonComponents from './components';
import { interceptors } from './interceptors';
import { RouterModule, Router } from '@angular/router';

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
    return {
      ngModule: AppCommonModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useFactory: authInterceptorFactory,
          multi: true,
          deps: [Router],
        },
      ],
    };
  }
}
export function authInterceptorFactory(router: Router) {
  return new interceptors.AuthInterceptor(router);
}
