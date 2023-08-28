import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(1)]],
    password: ['', [Validators.required, Validators.minLength(1)]],
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {}
  onSubmit() {
    if (this.loginForm.status === 'VALID') {
      this.authService
        .login$({
          username: this.loginForm.value.username as string,
          password: this.loginForm.value.password as string,
        })
        .subscribe();
    }

    // tslint:disable-next-line: forin
    // for (const key in this.loginForm.controls) {
    //   const control = this.loginForm.controls[key];
    //   control.markAllAsTouched();
    // }
  }

  /* LOgin google */

  // isShowModal = false;
  // title = 'loginGoogle';
  // auth2: any;
  // @ViewChild('loginRef', { static: true }) loginElement!: ElementRef;
  // constructor(private router: Router) {}
  // ngOnInit() {
  //   this.googleAuthSDK();
  // }
  // callLoginButton() {
  //   this.auth2.attachClickHandler(
  //     this.loginElement.nativeElement,
  //     {},
  //     (googleAuthUser: any) => {
  //       let profile = googleAuthUser.getBasicProfile();
  //       console.log('Token || ' + googleAuthUser.getAuthResponse().id_token);
  //       console.log('ID: ' + profile.getId());
  //       console.log('Name: ' + profile.getName());
  //       console.log('Image URL: ' + profile.getImageUrl());
  //       console.log('Email: ' + profile.getEmail());
  //       this.router.navigate(['']);
  //     },
  //     (error: any) => {
  //       console.log('errrr ', error);

  //       alert(JSON.stringify(error, undefined, 2));
  //     }
  //   );
  // }
  // googleAuthSDK() {
  //   (<any>window)['googleSDKLoaded'] = () => {
  //     (<any>window)['gapi'].load('auth2', () => {
  //       this.auth2 = (<any>window)['gapi'].auth2.init({
  //         api_key: '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',
  //         client_id:
  //           '832152656549-qsgf4kncn4upo3auqrl3f4t5cts4v3sd.apps.googleusercontent.com',
  //         scope: 'profile email',
  //       });
  //       this.callLoginButton();
  //     });
  //   };

  //   (function (d, s, id) {
  //     var js,
  //       fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) {
  //       return;
  //     }
  //     js = d.createElement('script');
  //     js.id = id;
  //     js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
  //     fjs?.parentNode?.insertBefore(js, fjs);
  //   })(document, 'script', 'google-jssdk');
  // }
}
