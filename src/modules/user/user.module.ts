import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as userContainers from './containers';
import { EffectsModule } from '@ngrx/effects';
import { GetUserProfileEffect } from './store/effects/getUserProfile.effect';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { UserProfileService } from './services/user-profile.service';
import { RouterModule } from '@angular/router';
import { NavigationModule } from '@modules/navigation/navigation.module';

@NgModule({
  declarations: [...userContainers.containers],
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature('userProfile', reducers),
  ],
  providers: [UserProfileService],
})
export class UserModule {}
