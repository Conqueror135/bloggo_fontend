import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, switchMap } from 'rxjs/operators';
import { from, Observable, throwError, of } from 'rxjs';
import { Router } from '@angular/router';
import { LoginRequestInterface } from '../types/login-request.interface';
import { LoginResponseInterface } from '../types/login-response.interface';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'environments/environment';
import { UserInfoInterface } from '@shared/types/userInfo.interface';
import { map } from 'rxjs/operators';
import { RegisterRequestInterface } from '../types/register-request.interface';

@Injectable()
export class AuthService {
  // constructor(
  //   private http: HttpClient,
  //   private router: Router,
  //   private toastr: ToastrService
  // ) {}

  // login$(loginPayload: LoginRequest): Observable<boolean> {
  //   return this.http
  //     .post<LoginResponse>(
  //       ` http://10.10.20.45:3003/api/users/login`,
  //       loginPayload
  //     )
  //     .pipe(
  //       switchMap((loginResults): Observable<string> => {
  //         return of(loginResults.token);
  //       }),
  //       switchMap((token) => {
  //         localStorage.setItem('token', token);
  //         this.toastr.success('Đăng nhập thành công!');

  //         return from(this.router.navigate(['/']));
  //       }),
  //       catchError((error: Error) => {
  //         this.toastr.error('Tài khoản hoặc mật khẩu không chính xác!');

  //         return throwError(() => error);
  //       })
  //     );
  // }

  constructor(private http: HttpClient) {}

  getUserInfo(response: UserInfoInterface): UserInfoInterface {
    return response;
  }
  login(data: LoginRequestInterface): Observable<UserInfoInterface> {
    const url = environment.apiUrl + '/users/login';
    return this.http
      .post<UserInfoInterface>(url, data)
      .pipe(map(this.getUserInfo));
  }

  register(data: RegisterRequestInterface): Observable<UserInfoInterface> {
    console.log('hhfhdgt ytdfysdtfy  dtfysd');

    const url = environment.apiUrl + '/users';
    return this.http
      .post<UserInfoInterface>(url, data)
      .pipe(map(this.getUserInfo));
  }
}
