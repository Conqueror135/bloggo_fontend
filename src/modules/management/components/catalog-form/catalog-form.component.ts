import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BackendErrorsInterface } from '@shared/types/backendErrors.interface';
import { CatalogInterface } from '@shared/types/catalog.interface';
import { CatalogInputInterface } from '@shared/types/catalogInput.interface';

@Component({
  selector: 'app-catalog-form',
  templateUrl: './catalog-form.component.html',
  styleUrls: ['./catalog-form.component.scss'],
})
export class CatalogFormComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}
  @Input('initialValues') initialValuesProps!: CatalogInputInterface | null;
  @Input('isSubmitting') isSubmittingProps!: boolean | null;
  @Input('errors') errorsProps!: BackendErrorsInterface | null;

  @Output('formSubmit') formSubmitEvent =
    new EventEmitter<CatalogInputInterface>();
  @Output('formCancel') formCancelEvent =
    new EventEmitter<CatalogInputInterface>();

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(): void {
    this.form = this.fb.group({
      name: this.initialValuesProps?.name,
      description: this.initialValuesProps?.description,
    });
  }
  onSubmit(): void {
    console.log('jdjshd sjhgdjs ', this.form.value);

    this.formSubmitEvent.emit(this.form.value);
  }
  onCancel(): void {
    console.log('8888888888888');

    this.formCancelEvent.emit();
  }
}
