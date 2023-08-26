import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogModule } from './blog.module';
import * as blogContainers from './containers';

export const ROUTES: Routes = [
  {
    path: '',
    component: blogContainers.HomeComponent,
  },
];

@NgModule({
  imports: [BlogModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
