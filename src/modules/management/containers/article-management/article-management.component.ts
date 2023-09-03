import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { getListArticleAction } from '@modules/management/store/actions/getListArticle.action';
import {
  errorSelector,
  isLoadingSelector,
  listArticleSelector,
} from '@modules/management/store/selectors';
import { GetListArticleResponseInterface } from '@modules/management/types/getListArticleResponse.interface';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-article-management',
  templateUrl: './article-management.component.html',
  styleUrls: ['./article-management.component.scss'],
})
export class ArticleManagementComponent {
  listArticles$!: Observable<GetListArticleResponseInterface | null>;
  error$!: Observable<string | null>;
  isLoading$!: Observable<boolean>;
  queryParamsSubscription!: Subscription;
  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  currentPage = 1;
  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }
  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1');
        this.fetchListArticle();
      }
    );
  }

  initializeValues(): void {
    this.listArticles$ = this.store.pipe(select(listArticleSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }
  fetchListArticle(): void {
    this.store.dispatch(getListArticleAction());
  }
}
