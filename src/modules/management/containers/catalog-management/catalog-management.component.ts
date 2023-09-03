import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { getListCatalogAction } from '@modules/management/store/actions/getListCatalog.action';
import {
  errorSelector,
  isLoadingSelector,
  listCatalogSelector,
} from '@modules/management/store/selectors';
import { GetListCatalogResponseInterface } from '@modules/management/types/getListCatalogResponse.interface';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-catalog-management',
  templateUrl: './catalog-management.component.html',
  styleUrls: ['./catalog-management.component.scss'],
})
export class CatalogManagementComponent implements OnInit {
  listCatalogs$!: Observable<GetListCatalogResponseInterface | null>;
  error$!: Observable<string | null>;
  isLoading$!: Observable<boolean>;
  queryParamsSubscription!: Subscription;
  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  currentPage = 1;
  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }
  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1');
        this.fetchListCatalog();
      }
    );
  }

  initializeValues(): void {
    this.listCatalogs$ = this.store.pipe(select(listCatalogSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }
  fetchListCatalog(): void {
    this.store.dispatch(getListCatalogAction());
  }
}
