import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as feedContainers from './containers';
import { FeedService } from './services/feed.service';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { reducers } from './store/reducers';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { heroBookmark, heroHeart } from '@ng-icons/heroicons/outline';
import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  declarations: [...feedContainers.containers],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    InfiniteScrollModule,
    NgIconsModule.withIcons({ heroBookmark, heroHeart }),
  ],
  exports: [...feedContainers.containers],

  providers: [FeedService],
})
export class FeedModule {}
