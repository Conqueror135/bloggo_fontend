import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { NavigationModule } from '@modules/navigation/navigation.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, NavigationModule],
})
export class BlogModule {}
