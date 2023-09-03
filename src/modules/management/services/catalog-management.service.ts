import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { GetListCatalogResponseInterface } from '../types/getListCatalogResponse.interface';

@Injectable()
export class CatalogManagementService {
  constructor(private http: HttpClient) {}

  getListCatalog(): Observable<GetListCatalogResponseInterface> {
    const fullUrl = environment.apiUrl + '/catalogs';
    return this.http.get<GetListCatalogResponseInterface>(fullUrl);
  }
}
