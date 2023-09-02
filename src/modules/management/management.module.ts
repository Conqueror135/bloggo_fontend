import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './containers/user-management/user-management.component';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import { heroPencil, heroTrash } from '@ng-icons/heroicons/outline';
import { RouterModule } from '@angular/router';
import { CatalogManagementComponent } from './containers/catalog-management/catalog-management.component';

import * as managementContainers from './containers';
@NgModule({
  declarations: [...managementContainers.containers],
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,

    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    FormsModule,
    NgIconsModule.withIcons({ heroPencil, heroTrash }),
  ],
})
export class ManagementModule {}
