import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { GetListUserResponseInterface } from '../types/getListUserResponse.interface';

@Injectable()
export class UserManagementService {
  constructor(private http: HttpClient) {}

  getListUser(): Observable<GetListUserResponseInterface> {
    const fullUrl = environment.apiUrl + '/users';
    return this.http.get<GetListUserResponseInterface>(fullUrl);
  }
}
