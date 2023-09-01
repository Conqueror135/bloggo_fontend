import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { GetArticleResponseInterface } from '@shared/types/getArticleResponse.interface';
import { ArticleInterface } from '@shared/types/article.interface';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(_id: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${_id}`;
    return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
      map((response: GetArticleResponseInterface) => {
        return response.data;
      })
    );
  }

  deleteArticle(_id: string): Observable<{}> {
    const url = `${environment.apiUrl}/articles/${_id}`;

    return this.http.delete<{}>(url);
  }
}
