import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { EditArticleService } from '../../services/editArticle.service';
import {
  updateArticleSuccessAction,
  updateArticleAction,
  updateArticleFailureAction,
} from '../actions/updateArticle.action';
import { ArticleInterface } from '@shared/types/article.interface';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UpdateArticleEffect {
  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({ _id, articleInput }) => {
        return this.editArticleService.updateArticle(_id, articleInput).pipe(
          map((article: ArticleInterface) => {
            this.toastr.success('Update article successfully!');
            return updateArticleSuccessAction({ article });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            this.toastr.error('Update article failed!');
            return of(
              updateArticleFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/article/detail', article._id]);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService,
    private router: Router,
    private toastr: ToastrService
  ) {}
}
