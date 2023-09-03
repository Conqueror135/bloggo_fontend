import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  createCatalogAction,
  createCatalogSuccessAction,
  deleteCatalogAction,
  deleteCatalogFailureAction,
  deleteCatalogSuccessAction,
  getListCatalogAction,
  getListCatalogFailureAction,
  getListCatalogSuccessAction,
} from '../actions/catalogManagement.action';
import { CatalogManagementService } from '@modules/management/services/catalog-management.service';
import { GetListCatalogResponseInterface } from '@modules/management/types/getListCatalogResponse.interface';
import { CatalogInterface } from '@shared/types/catalog.interface';
import { ToastrService } from 'ngx-toastr';

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

@Injectable()
export class CreateCatalogEffect {
  createCatalog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCatalogAction),
      switchMap(({ catalogInput }) => {
        return this.catalogManagementService.createCatalog(catalogInput).pipe(
          map((catalog: CatalogInterface) => {
            this.toastr.success('Create catalog successfully!', '', {
              closeButton: true,
            });
            return createCatalogSuccessAction({ catalog });
          }),

          catchError(() => {
            this.toastr.error('Create catalog failed!', '', {
              closeButton: true,
            });
            return of(getListCatalogFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private catalogManagementService: CatalogManagementService,
    private toastr: ToastrService
  ) {}
}

@Injectable()
export class DeleteCatalogEffect {
  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCatalogAction),
      switchMap(({ _id }) => {
        return this.catalogManagementService.deleteCatalog(_id).pipe(
          map(() => {
            this.toastr.success('Delete catalog successfully!', '', {
              closeButton: true,
            });
            return deleteCatalogSuccessAction();
          }),

          catchError(() => {
            this.toastr.error('Delete article failed!', '', {
              closeButton: true,
            });
            return of(deleteCatalogFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private catalogManagementService: CatalogManagementService,
    private toastr: ToastrService
  ) {}
}
