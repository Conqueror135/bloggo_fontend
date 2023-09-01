import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as articleContainers from './containers';
import { ArticleModule } from './article.module';

export const ROUTES: Routes = [
  {
    path: 'new',
    component: articleContainers.CreateArticleComponent,
  },

  {
    path: 'edit/:id',
    component: articleContainers.EditArticleComponent,
  },
  {
    path: 'detail/:id',
    component: articleContainers.ArticleComponent,
  },
];

@NgModule({
  imports: [ArticleModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
