import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { deleteArticleAction } from '@modules/article/store/actions/deleteArticle.action';
import { getArticleAction } from '@modules/article/store/actions/getArticle.action';
import {
  articleSelector,
  errorSelector,
  isLoadingSelector,
} from '@modules/article/store/selectors';
import { currentUserSelector } from '@modules/auth/store/selectors';
import { Store, select } from '@ngrx/store';
import { ArticleInterface } from '@shared/types/article.interface';
import { UserInfoInterface } from '@shared/types/userInfo.interface';
import { Observable, Subscription, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  _id!: string | null;
  article!: ArticleInterface | null;
  articleSubscription!: Subscription;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  isAuthor$!: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }
  initializeValues(): void {
    this._id = this.route.snapshot.paramMap.get('id');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isAuthor$ = combineLatest([
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector)),
    ]).pipe(
      map(
        ([article, currentUser]: [
          ArticleInterface | null,
          UserInfoInterface | null
        ]) => {
          console.log('article  ', article);

          if (!article || !currentUser) {
            return false;
          }
          return currentUser.username === article.user.username;
        }
      )
    );
  }
  initializeListeners(): void {
    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article: ArticleInterface | null) => {
        this.article = article;
      });
  }
  fetchData(): void {
    this.store.dispatch(getArticleAction({ _id: this._id as string }));
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({ _id: this._id as string }));
  }
}
