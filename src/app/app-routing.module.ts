import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('modules/blog/blog-routing.module').then(
        (m) => m.BlogRoutingModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('modules/auth/auth-routing.module').then(
        (m) => m.AuthRoutingModule
      ),
  },
  {
    path: 'article',
    loadChildren: () =>
      import('modules/article/article-routing.module').then(
        (m) => m.ArticleRoutingModule
      ),
    data: { breadcrumb: { alias: 'Article' } },
  },
  {
    path: 'user',
    loadChildren: () =>
      import('modules/user/user-routing.module').then(
        (m) => m.UserRoutingModule
      ),
  },
  {
    path: 'managements',
    loadChildren: () =>
      import('modules/management/management-routing.module').then(
        (m) => m.ManagementRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
