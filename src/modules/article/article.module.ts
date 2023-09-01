import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as articleContainers from './containers';
import * as articleComponents from './components';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CreateArticleEffect } from './store/effects/createArticle.effect';
import { CreateArticleService } from './services/createArticle.service';
import { reducers } from './store/reducers';
import { RouterModule } from '@angular/router';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect';
import { ArticleService } from './services/article.service';
import { UpdateArticleEffect } from './store/effects/updateArticle.effect';
import { EditArticleService } from './services/editArticle.service';

@NgModule({
  declarations: [
    ...articleContainers.containers,
    ...articleComponents.components,
  ],
  imports: [
    CommonModule,
    NavigationModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([
      CreateArticleEffect,
      GetArticleEffect,
      DeleteArticleEffect,
      UpdateArticleEffect,
    ]),
    StoreModule.forFeature('article', reducers),
  ],
  exports: [...articleContainers.containers, ...articleComponents.components],
  providers: [CreateArticleService, ArticleService, EditArticleService],
})
export class ArticleModule {}
