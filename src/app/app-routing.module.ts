import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components1/home/home.component';
import { ProductDetailComponent } from './components1/product-detail/product-detail.component';
import { ListProductDetailComponent } from './components1/list-product-detail/list-product-detail.component';
import { ShoppingCartComponent } from './components1/shopping-cart/shopping-cart.component';
import { EditProductComponent } from './components1/edit-product/edit-product.component';
import { AddProductComponent } from './components1/add-product/add-product.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ProductsList', component: ListProductDetailComponent },
  { path: 'ProductDetail', component: ProductDetailComponent },
  { path: 'ShoppingCart', component: ShoppingCartComponent },
  { path: 'ProductDetail/:id', component: ProductDetailComponent },
  { path: 'EditProduct/:id', component: EditProductComponent },
  { path: 'AddProduct' , component: AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
