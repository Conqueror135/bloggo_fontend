import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { currentUserSelector } from '@modules/auth/store/selectors';
import { getUserProfileAction } from '@modules/user/store/actions/getUserProfile.action';
import {
  errorSelector,
  isLoadingSelector,
  userProfileSelector,
} from '@modules/user/store/selectors';
import { UserProfileInterface } from '@modules/user/types/userProfile.interface';
import { Store, select } from '@ngrx/store';
import { UserInfoInterface } from '@shared/types/userInfo.interface';
import { Observable, Subscription, combineLatest, filter, map } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userProfile!: UserProfileInterface | null;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  userProfileSubscription!: Subscription;
  _id!: string;
  isCurrentUserProfile$!: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }
  initializeValues(): void {
    this._id = this.route.snapshot.paramMap.get('id') || ' ';
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isCurrentUserProfile$ = combineLatest([
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean)),
    ]).pipe(
      map(
        ([currentUser, userProfile]: [
          UserInfoInterface,
          UserProfileInterface
        ]) => {
          return currentUser.username === userProfile.username;
        }
      )
    );
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites');
    return isFavorites
      ? `/articles?favorited=${this._id}`
      : `/articles?author=${this._id}`;
  }

  initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector))
      .subscribe((userProfile: UserProfileInterface | null) => {
        this.userProfile = userProfile;
      });

    this.route.params.subscribe((params: Params) => {
      this._id = params['id'];
      this.fetchUserProfile();
    });
  }

  fetchUserProfile(): void {
    console.log(' this._id ', this._id);

    this.store.dispatch(getUserProfileAction({ _id: this._id }));
  }
}
