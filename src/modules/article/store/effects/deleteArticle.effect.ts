import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Router } from '@angular/router';
import {
  deleteArticleAction,
  deleteArticleFailureAction,
  deleteArticleSuccessAction,
} from '../actions/deleteArticle.action';
import { ArticleService } from '@modules/article/services/article.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class DeleteArticleEffect {
  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({ _id }) => {
        return this.articleService.deleteArticle(_id).pipe(
          map(() => {
            this.toastr.success('Delete article successfully!', '', {
              closeButton: true,
            });
            return deleteArticleSuccessAction();
          }),

          catchError(() => {
            this.toastr.error('Delete article failed!', '', {
              closeButton: true,
            });
            return of(deleteArticleFailureAction());
          })
        );
      })
    )
  );

  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteArticleSuccessAction),
        tap(() => {
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
    private router: Router,
    private toastr: ToastrService
  ) {}
}
