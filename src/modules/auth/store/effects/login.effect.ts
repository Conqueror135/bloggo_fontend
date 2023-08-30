import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
} from '../actions/login.action';
import { UserInfoInterface } from '@shared/types/userInfo.interface';
import { PersistanceService } from '@shared/services/persistance.service';
import { AuthService } from '@modules/auth/services';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((userInfo: UserInfoInterface) => {
            this.persistanceService.set('token', userInfo.token);
            this.toastr.success('Đăng nhập thành công!');
            return loginSuccessAction({ userInfo });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            this.toastr.error('Tài khoản hoặc mật khẩu không chính xác!');
            return of(
              loginFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router,
    private toastr: ToastrService
  ) {}
}
