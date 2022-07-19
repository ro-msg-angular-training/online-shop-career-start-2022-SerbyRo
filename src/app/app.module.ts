import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayProductComponent } from './components/display-product/display-product.component';
import { ListOfProductsComponent } from './components/list-of-products/list-of-products.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayProductComponent,
    ListOfProductsComponent,
    HomeComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
