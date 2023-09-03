import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  createCatalogAction,
  deleteCatalogAction,
  getListCatalogAction,
} from '@modules/management/store/actions/catalogManagement.action';
import {
  errorSelector,
  isLoadingSelector,
  listCatalogSelector,
} from '@modules/management/store/selectors';
import { GetListCatalogResponseInterface } from '@modules/management/types/getListCatalogResponse.interface';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CatalogInputInterface } from '@shared/types/catalogInput.interface';
import { BackendErrorsInterface } from '@shared/types/backendErrors.interface';

@Component({
  selector: 'app-catalog-management',
  templateUrl: './catalog-management.component.html',
  styleUrls: ['./catalog-management.component.scss'],
})
export class CatalogManagementComponent implements OnInit {
  modalRef!: BsModalRef;

  listCatalogs$!: Observable<GetListCatalogResponseInterface | null>;
  error$!: Observable<string | null>;
  isLoading$!: Observable<boolean>;
  queryParamsSubscription!: Subscription;

  initialValues: CatalogInputInterface = {
    name: '',
    description: '',
  };
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrorsInterface | null>;

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
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  onSubmit(catalogInput: CatalogInputInterface): void {
    this.store.dispatch(createCatalogAction({ catalogInput }));
    this.modalRef.hide();
    this.fetchListCatalog();
  }
  onCancel(): void {
    this.modalRef.hide();
  }
  onDelete(_id: string) {
    this.store.dispatch(deleteCatalogAction({ _id }));
  }
}
