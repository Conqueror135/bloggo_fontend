import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as authContainers from './containers';

export const ROUTES: Routes = [
  {
    path: 'login',
    canActivate: [],
    component: authContainers.LoginComponent,
  },
  {
    path: 'register',
    canActivate: [],
    component: authContainers.RegisterComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
