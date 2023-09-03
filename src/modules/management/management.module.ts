import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import { heroPencil, heroTrash, heroPlus } from '@ng-icons/heroicons/outline';
import { RouterModule } from '@angular/router';

import * as managementContainers from './containers';
import { EffectsModule } from '@ngrx/effects';
import { GetListUserEffect } from './store/effects/getListUser.effect';
import { UserManagementService } from './services/user-management.service';
import { reducers } from './store/reducer';
import { StoreModule } from '@ngrx/store';
import { CatalogManagementService } from './services/catalog-management.service';
import { GetListCatalogEffect } from './store/effects/getListCatalog.effect';
@NgModule({
  declarations: [...managementContainers.containers],
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,

    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    FormsModule,
    NgIconsModule.withIcons({ heroPencil, heroTrash, heroPlus }),
    EffectsModule.forFeature([GetListUserEffect, GetListCatalogEffect]),
    StoreModule.forFeature('managements', reducers),
  ],
  providers: [UserManagementService, CatalogManagementService],
})
export class ManagementModule {}
