import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  subscription: Subscription = new Subscription();
  isLoggedIn = false;
  isOnPost = false;
  isMenuCollapsed = true;
  ngOnInit() {
    this.isLoggedIn = false;
  }
}
