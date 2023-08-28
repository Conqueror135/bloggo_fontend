import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.isLoggedIn = false;
  }
  showAccount() {
    this.isShowMenu = !this.isShowMenu;
  }
}
