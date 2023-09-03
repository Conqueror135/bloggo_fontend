import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { getListUserAction } from '@modules/management/store/actions/getListUser.action';
import {
  errorSelector,
  isLoadingSelector,
  listUserSelector,
} from '@modules/management/store/selectors';
import { GetListUserResponseInterface } from '@modules/management/types/getListUserResponse.interface';
import { Store, select } from '@ngrx/store';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  modalRef!: BsModalRef;
  listUsers$!: Observable<GetListUserResponseInterface | null>;
  error$!: Observable<string | null>;
  isLoading$!: Observable<boolean>;
  queryParamsSubscription!: Subscription;
  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) {}

  currentPage = 1;
  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    // this.listUsers$.subscribe({
    //   next: (value) => {
    //     this.dataListUser = value;
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   },
    //   complete: () => {
    //     console.log('Done');
    //   },
    // });
  }
  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1');
        this.fetchListUser();
      }
    );
  }

  initializeValues(): void {
    this.listUsers$ = this.store.pipe(select(listUserSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }
  fetchListUser(): void {
    this.store.dispatch(getListUserAction());
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
