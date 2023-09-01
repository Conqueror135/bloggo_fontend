import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getArticleAction } from '@modules/article/store/actions/getArticle.action';
import { updateArticleAction } from '@modules/article/store/actions/updateArticle.action';
import {
  articleSelector,
  isLoadingSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from '@modules/article/store/selectors';
import { Store, select } from '@ngrx/store';
import { ArticleInterface } from '@shared/types/article.interface';
import { ArticleInputInterface } from '@shared/types/articleInput.interface';
import { BackendErrorsInterface } from '@shared/types/backendErrors.interface';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent {
  initialValues$!: Observable<ArticleInputInterface>;
  isSubmitting$!: Observable<boolean>;
  isLoading$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrorsInterface | null>;
  _id!: string;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initialValues();
    this.fetchData();
  }

  initialValues(): void {
    this._id = this.route.snapshot.paramMap.get('id') || ' ';
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          subtitle: article.subtitle,
          content: article.content,
        };
      })
    );
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ _id: this._id }));
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(updateArticleAction({ _id: this._id, articleInput }));
  }
}
