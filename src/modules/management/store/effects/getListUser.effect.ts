import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  getListUserAction,
  getListUserFailureAction,
  getListUserSuccessAction,
} from '../actions/getListUser.action';
import { UserManagementService } from '@modules/management/services/user-management.service';
import { GetListUserResponseInterface } from '@modules/management/types/getListUserResponse.interface';

@Injectable()
export class GetListUserEffect {
  getListUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getListUserAction),
      switchMap(() => {
        return this.userManagementService.getListUser().pipe(
          map((listUser: GetListUserResponseInterface) => {
            console.log('List user ', listUser);

            return getListUserSuccessAction({ listUser });
          }),

          catchError(() => {
            return of(getListUserFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private userManagementService: UserManagementService
  ) {}
}
