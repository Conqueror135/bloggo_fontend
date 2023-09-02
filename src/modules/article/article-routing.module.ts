import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as articleContainers from './containers';
import { ArticleModule } from './article.module';

export const ROUTES: Routes = [
  {
    path: 'new',
    component: articleContainers.CreateArticleComponent,
    data: { breadcrumb: { alias: 'New Article' } },
  },

  {
    path: 'edit/:id',
    component: articleContainers.EditArticleComponent,
    data: { breadcrumb: { alias: 'Edit Article' } },
  },
  {
    path: 'detail/:id',
    component: articleContainers.ArticleComponent,
    data: { breadcrumb: { alias: 'Detail Article' } },
  },
];

@NgModule({
  imports: [ArticleModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
