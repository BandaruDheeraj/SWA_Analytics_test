import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { externalModules } from './build-specific';
import { declarations } from './core';
import { DiscountComponent } from './discounts.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, DiscountComponent, declarations],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {}),
    SharedModule,
    externalModules,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
