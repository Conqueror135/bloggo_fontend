import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppbreadcrumbComponent } from './components/appbreadcrumb/appbreadcrumb.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { BreadcrumbModule } from 'xng-breadcrumb';
@NgModule({
  declarations: [AppbreadcrumbComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
    NgIconsModule.withIcons({ heroUsers }),
  ],
  exports: [AppbreadcrumbComponent],
})
export class AppbreadcrumbModule {}
