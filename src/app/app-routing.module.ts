import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components1/home/home.component';
import { ProductDetailComponent } from './components1/product-detail/product-detail.component';
import { ListProductDetailComponent } from './components1/list-product-detail/list-product-detail.component';
import { ShoppingCartComponent } from './components1/shopping-cart/shopping-cart.component';
import { EditProductComponent } from './components1/edit-product/edit-product.component';
import { AddProductComponent } from './components1/add-product/add-product.component';
import { LoginComponent } from './components1/login/login.component';
import { AuthGuard } from './components1/guards/auth.guard';
import { CustomerAuthGuard } from './components1/guards/customer-auth.guard';
const routes: Routes = [
  
  { path: 'Login' , component: LoginComponent},
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      // { path: '', component: HomeComponent },
      { path: 'ProductsList', component: ListProductDetailComponent },
      { path: 'ProductDetail', component: ProductDetailComponent },
      { path: 'ShoppingCart', canActivate: [CustomerAuthGuard],component: ShoppingCartComponent },
      { path: 'ProductDetail/:id', component: ProductDetailComponent },
      { path: 'EditProduct/:id', component: EditProductComponent },
      { path: 'AddProduct' , component: AddProductComponent},
      { path: '', pathMatch: 'full', redirectTo: '/ProductsList' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
