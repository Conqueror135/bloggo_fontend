import { ArticleManagementComponent } from './article-management/article-management.component';
import { CatalogManagementComponent } from './catalog-management/catalog-management.component';
import { UserManagementComponent } from './user-management/user-management.component';

export const containers = [
  UserManagementComponent,
  CatalogManagementComponent,
  ArticleManagementComponent,
];

export * from './user-management/user-management.component';
export * from './catalog-management/catalog-management.component';
export * from './article-management/article-management.component';
