import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { GetListCatalogResponseInterface } from '../types/getListCatalogResponse.interface';
import { CatalogInterface } from '@shared/types/catalog.interface';
import { CatalogInputInterface } from '@shared/types/catalogInput.interface';
import { SaveCatalogResponseInterface } from '@shared/types/saveCatalogResponse.interface';

@Injectable()
export class CatalogManagementService {
  constructor(private http: HttpClient) {}

  getListCatalog(): Observable<GetListCatalogResponseInterface> {
    const fullUrl = environment.apiUrl + '/catalogs';
    return this.http.get<GetListCatalogResponseInterface>(fullUrl);
  }
  createCatalog(
    catalogInput: CatalogInputInterface
  ): Observable<CatalogInterface> {
    const fullUrl = environment.apiUrl + '/catalogs';
    return this.http
      .post<SaveCatalogResponseInterface>(fullUrl, catalogInput)
      .pipe(
        map((response: SaveCatalogResponseInterface) => {
          return response.data;
        })
      );
  }
  deleteCatalog(_id: string): Observable<{}> {
    const url = `${environment.apiUrl}/catalogs/${_id}`;

    return this.http.delete<{}>(url);
  }
}
