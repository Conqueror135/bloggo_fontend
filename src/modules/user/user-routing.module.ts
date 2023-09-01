import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as userContainers from './containers';
import { UserModule } from './user.module';

export const ROUTES: Routes = [
  {
    path: 'profile/:id',
    component: userContainers.UserProfileComponent,
  },
];

@NgModule({
  imports: [UserModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
