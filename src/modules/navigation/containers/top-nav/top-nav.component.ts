import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

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
  ngOnInit() {
    this.isLoggedIn = false;
  }
  showAccount() {
    this.isShowMenu = !this.isShowMenu;
  }
}
