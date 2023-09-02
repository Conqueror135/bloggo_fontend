import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '@modules/navigation/navigation.module';
import * as blogComponents from './components';
import * as blogContainers from './containers';
import { FeedModule } from '@modules/feed/feed.module';

@NgModule({
  declarations: [...blogContainers.containers, ...blogComponents.components],
  imports: [CommonModule, NavigationModule, FeedModule],
  exports: [...blogContainers.containers, ...blogComponents.components],
})
export class BlogModule {}
