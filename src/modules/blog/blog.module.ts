import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '@modules/navigation/navigation.module';
import * as blogComponents from './components';
import * as blogContainers from './containers';

@NgModule({
  declarations: [...blogContainers.containers, ...blogComponents.components],
  imports: [CommonModule, NavigationModule],
  exports: [...blogContainers.containers, ...blogComponents.components],
})
export class BlogModule {}
