import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroPencil,
  heroTrash,
  heroPlus,
  heroXMark,
} from '@ng-icons/heroicons/outline';
import { RouterModule } from '@angular/router';

import * as managementContainers from './containers';
import { EffectsModule } from '@ngrx/effects';
import { GetListUserEffect } from './store/effects/getListUser.effect';
import { UserManagementService } from './services/user-management.service';
import { reducers } from './store/reducer';
import { StoreModule } from '@ngrx/store';
import { CatalogManagementService } from './services/catalog-management.service';
import {
  CreateCatalogEffect,
  DeleteCatalogEffect,
  GetListCatalogEffect,
} from './store/effects/catalogManagement.effect';
import { ArticleManagementService } from './services/article-managements.service';
import { GetListArticleEffect } from './store/effects/getListArticle.action';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

import * as managementComponents from './components';
@NgModule({
  declarations: [
    ...managementContainers.containers,
    ...managementComponents.components,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,

    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    FormsModule,
    NgIconsModule.withIcons({ heroPencil, heroTrash, heroPlus, heroXMark }),
    EffectsModule.forFeature([
      GetListUserEffect,
      GetListCatalogEffect,
      CreateCatalogEffect,
      GetListArticleEffect,
      DeleteCatalogEffect,
    ]),
    StoreModule.forFeature('managements', reducers),
    ModalModule,
  ],
  providers: [
    UserManagementService,
    CatalogManagementService,
    ArticleManagementService,
    BsModalService,
  ],
})
export class ManagementModule {}
