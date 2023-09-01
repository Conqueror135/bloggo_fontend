import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, map } from 'rxjs';
import { GetUserProfileResponseInterface } from '../types/getUserProfileResponse.interface';
import { UserProfileInterface } from '../types/userProfile.interface';

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}
  getUserProfile(_id: string): Observable<UserProfileInterface> {
    const url = `${environment.apiUrl}/users/${_id}`;

    return this.http.get(url).pipe(map((response: any) => response));
  }
}
