import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components1/home/home.component';
import { ProductDetailComponent } from './components1/product-detail/product-detail.component';
import { ListProductDetailComponent } from './components1/list-product-detail/list-product-detail.component';
import { ShoppingCartComponent } from './components1/shopping-cart/shopping-cart.component';
import { EditProductComponent } from './components1/edit-product/edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProductComponent } from './components1/add-product/add-product.component';
import { LoginComponent } from './components1/login/login.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductsEffects } from './store/effects/product.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { productReducer } from './store/reducers/product.reducers';
import { AuthEffects } from './store/effects/auth.effects';
import { authReducer } from './store/reducers/auth.reducers';
import { CartEffects } from './store/effects/shopping-cart.effects';
import { cartReducer } from './store/reducers/shopping-cart.reducers';
import { environment } from 'src/environments/environment';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
@NgModule({
  declarations: [
    AppComponent,
    ListProductDetailComponent,
    HomeComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    EditProductComponent,
    AddProductComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    EffectsModule.forRoot([ProductsEffects, AuthEffects, CartEffects]),
    StoreModule.forRoot(
      { products: productReducer, auths: authReducer, carts: cartReducer },
      {}
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
