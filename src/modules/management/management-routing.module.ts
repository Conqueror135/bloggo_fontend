import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementModule } from './management.module';
import * as managementContainers from './containers';

export const ROUTES: Routes = [
  {
    path: '',
    component: managementContainers.UserManagementComponent,
  },
  {
    path: 'user',
    component: managementContainers.UserManagementComponent,
  },
  {
    path: 'catalog',
    component: managementContainers.CatalogManagementComponent,
  },
];

@NgModule({
  imports: [ManagementModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ManagementRoutingModule {}
