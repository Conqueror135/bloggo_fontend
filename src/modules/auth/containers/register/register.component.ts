import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registerAction } from '@modules/auth/store/actions/register.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '@modules/auth/store/selectors';
import { RegisterRequestInterface } from '@modules/auth/types/register-request.interface';
import { Store, select } from '@ngrx/store';
import { BackendErrorsInterface } from '@shared/types/backendErrors.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$?: Observable<boolean>;
  backendErrors$?: Observable<BackendErrorsInterface | null>;

  constructor(private fb: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }
  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }
  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid);
    const request: RegisterRequestInterface = this.form.value;
    console.log('1111111111111');

    this.store.dispatch(registerAction({ request }));
    console.log('22222222222');
  }
}
