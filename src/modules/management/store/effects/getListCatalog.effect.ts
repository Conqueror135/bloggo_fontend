import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  getListCatalogAction,
  getListCatalogFailureAction,
  getListCatalogSuccessAction,
} from '../actions/getListCatalog.action';
import { CatalogManagementService } from '@modules/management/services/catalog-management.service';
import { GetListCatalogResponseInterface } from '@modules/management/types/getListCatalogResponse.interface';

@Injectable()
export class GetListCatalogEffect {
  getListCatalog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getListCatalogAction),
      switchMap(() => {
        return this.catalogManagementService.getListCatalog().pipe(
          map((listCatalog: GetListCatalogResponseInterface) => {
            return getListCatalogSuccessAction({ listCatalog });
          }),

          catchError(() => {
            return of(getListCatalogFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private catalogManagementService: CatalogManagementService
  ) {}
}
