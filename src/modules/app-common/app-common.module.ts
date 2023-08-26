import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '@modules/icons/icons.module';

const thirdParty = [IconsModule, NgbModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...thirdParty],
  exports: [...thirdParty],
})
export class AppCommonModule {}
