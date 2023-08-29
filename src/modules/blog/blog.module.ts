import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '@modules/navigation/navigation.module';
import * as blogComponents from './components';
import * as blogContainers from './containers';
import { AboutComponent } from './containers/about/about.component';

@NgModule({
  declarations: [
    ...blogContainers.containers,
    ...blogComponents.components,
    AboutComponent,
  ],
  imports: [CommonModule, NavigationModule],
  exports: [...blogContainers.containers, ...blogComponents.components],
})
export class BlogModule {}
