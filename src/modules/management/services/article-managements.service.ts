import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { GetListArticleResponseInterface } from '../types/getListArticleResponse.interface';

@Injectable()
export class ArticleManagementService {
  constructor(private http: HttpClient) {}

  getListArticle(): Observable<GetListArticleResponseInterface> {
    const fullUrl = environment.apiUrl + '/articles';
    return this.http.get<GetListArticleResponseInterface>(fullUrl);
  }
}
