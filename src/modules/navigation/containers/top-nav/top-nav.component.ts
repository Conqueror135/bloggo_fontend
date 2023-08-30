import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { isLoggedInSelector } from '@modules/auth/store/selectors';
import { logoutAction } from '@modules/auth/store/actions/logout.action';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  subscription: Subscription = new Subscription();
  isLoggedIn = false;
  isOnPost = false;
  isMenuCollapsed = true;
  isShowMenu = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}
  ngOnInit() {
    this.store.pipe(select(isLoggedInSelector)).subscribe((data) => {
      this.isLoggedIn = data != null ? data : false;
    });
  }
  showAccount() {
    this.isShowMenu = !this.isShowMenu;
  }
  logout(): void {
    this.store.dispatch(logoutAction());
  }
}
