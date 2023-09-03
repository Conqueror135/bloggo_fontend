import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  getListArticleAction,
  getListArticleFailureAction,
  getListArticleSuccessAction,
} from '../actions/getListArticle.action';
import { GetListArticleResponseInterface } from '@modules/management/types/getListArticleResponse.interface';
import { ArticleManagementService } from '@modules/management/services/article-managements.service';

@Injectable()
export class GetListArticleEffect {
  getListArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getListArticleAction),
      switchMap(() => {
        return this.articleManagementService.getListArticle().pipe(
          map((listArticle: GetListArticleResponseInterface) => {
            console.log('listArticle ', listArticle);

            return getListArticleSuccessAction({ listArticle });
          }),

          catchError(() => {
            return of(getListArticleFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private articleManagementService: ArticleManagementService
  ) {}
}
