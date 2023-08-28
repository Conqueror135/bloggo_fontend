import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, switchMap } from 'rxjs/operators';
import { from, Observable, throwError, of } from 'rxjs';
import { Router } from '@angular/router';
import { LoginRequest } from '../types/login-request.interface';
import { LoginResponse } from '../types/login-response.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login$(loginPayload: LoginRequest): Observable<boolean> {
    return this.http
      .post<LoginResponse>(
        `http://172.20.10.8:3003/api/users/login`,
        loginPayload
      )
      .pipe(
        switchMap((loginResults): Observable<string> => {
          return of(loginResults.token);
        }),
        switchMap((token) => {
          localStorage.setItem('token', token);
          return from(this.router.navigate(['/']));
        }),
        catchError((error: Error) => throwError(error))
      );
  }
}
