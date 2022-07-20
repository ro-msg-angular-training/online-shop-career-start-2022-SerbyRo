import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components1/home/home.component';
import { ProductDetailComponent } from './components1/product-detail/product-detail.component';
import { ListProductDetailComponent } from './components1/list-product-detail/list-product-detail.component'; 
import { ShoppingCartComponent } from './components1/shopping-cart/shopping-cart.component';
const routes: Routes = [
{path:'' , component: HomeComponent},
{path: 'ProductsList', component: ListProductDetailComponent},
{path: 'ProductDetail', component:ProductDetailComponent},
{path: 'ShoppingCart', component: ShoppingCartComponent},
{path: 'ProductDetail/:id' ,component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
