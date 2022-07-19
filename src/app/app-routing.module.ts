import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DisplayProductComponent } from './components/display-product/display-product.component';
import {ListOfProductsComponent} from './components/list-of-products/list-of-products.component';

const routes: Routes = [
{path:'' , component: HomeComponent},
{path:'display-product/:id', component: DisplayProductComponent},
{path: 'list-of-products', component: ListOfProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
