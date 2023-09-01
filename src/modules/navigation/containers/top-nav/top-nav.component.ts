import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import {
  currentUserSelector,
  isLoggedInSelector,
} from '@modules/auth/store/selectors';
import { logoutAction } from '@modules/auth/store/actions/logout.action';
import { map } from 'rxjs/operators';
import { UserInfoInterface } from '@shared/types/userInfo.interface';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  @Input() darkMode!: boolean;

  subscription: Subscription = new Subscription();
  isLoggedIn$!: Observable<boolean>;
  isUnLoggedIn$!: Observable<boolean>;
  currentUser$!: Observable<UserInfoInterface | null>;
  isOnPost = false;
  isMenuCollapsed = true;
  isShowMenu = false;

  isFixed = true;
  isScrolled = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}
  ngOnInit() {
    this.isLoggedIn$ = this.store
      .pipe(select(isLoggedInSelector))
      .pipe(map((value) => value ?? false));
    this.isUnLoggedIn$ = this.store
      .pipe(select(isLoggedInSelector))
      .pipe(map((value) => !value ?? false));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
  showAccount() {
    this.isShowMenu = !this.isShowMenu;
  }
  logout(): void {
    this.store.dispatch(logoutAction());
  }
  onScroll(event: any) {
    const scrollTop = event.target.scrollingElement.scrollTop;
    const headerHeight = 350;
    if (scrollTop > headerHeight) {
      this.isFixed = false;
      this.isScrolled = true;
    } else {
      this.isFixed = true;
      this.isScrolled = false;
    }
  }
}
