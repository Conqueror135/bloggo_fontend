import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticleInputInterface } from '@shared/types/articleInput.interface';
import { BackendErrorsInterface } from '@shared/types/backendErrors.interface';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  @Input('initialValues') initialValuesProps!: ArticleInputInterface | null;
  @Input('isSubmitting') isSubmittingProps!: boolean | null;
  @Input('errors') errorsProps!: BackendErrorsInterface | null;

  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<ArticleInputInterface>();

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps?.title,
      subtitle: this.initialValuesProps?.subtitle,
      content: this.initialValuesProps?.content,
      // tagList: this.initialValuesProps.tagList.join(' '),
    });
  }

  onSubmit(): void {
    console.log('jdjshd sjhgdjs ', this.form.value);

    this.articleSubmitEvent.emit(this.form.value);
  }
}
