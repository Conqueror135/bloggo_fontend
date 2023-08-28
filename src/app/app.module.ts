import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { AppCommonModule } from '@common/app-common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@modules/auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCommonModule.forRoot(),
    NavigationModule.forRoot(),
    AuthModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
