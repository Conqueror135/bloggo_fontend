import { Component, OnInit } from '@angular/core';
import { createArticleAction } from '@modules/article/store/actions/createArticle.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '@modules/auth/store/selectors';
import { Store, select } from '@ngrx/store';
import { ArticleInputInterface } from '@shared/types/articleInput.interface';
import { BackendErrorsInterface } from '@shared/types/backendErrors.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    subtitle: '',
    content: '',
    // tagList: [],
  };
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrorsInterface | null>;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }
  onSubmit(articleInput: ArticleInputInterface): void {
    console.log('mmmmmm ', articleInput);

    this.store.dispatch(createArticleAction({ articleInput }));
  }
}
