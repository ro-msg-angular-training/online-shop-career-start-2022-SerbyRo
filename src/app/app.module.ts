import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './components1/home/home.component';
import {ProductDetailComponent} from './components1/product-detail/product-detail.component';
import {ListProductDetailComponent} from './components1/list-product-detail/list-product-detail.component';
import {ShoppingCartComponent} from './components1/shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    AppComponent,
    ListProductDetailComponent,
    HomeComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
