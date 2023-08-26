import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TopNavComponent } from './containers/top-nav/top-nav.component';
import { LayoutBlogComponent } from './layouts/layout-blog/layout-blog.component';

import * as appCommonLayouts from './layouts';

@NgModule({
  declarations: [
    NavigationComponent,
    TopNavComponent,
    ...appCommonLayouts.layouts,
  ],
  imports: [CommonModule],
  exports: [...appCommonLayouts.layouts],
})
export class NavigationModule {
  static forRoot(): ModuleWithProviders<NavigationModule> {
    return {
      ngModule: NavigationModule,
    };
  }
}
