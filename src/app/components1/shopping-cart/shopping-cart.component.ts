import { Component, OnInit } from '@angular/core';
import Product from '../Types/product';
import { Order } from 'src/app/order';
import { ProductService } from '../product.service';
import { AuthentificationService } from '../authentification.service';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.state';
import { ordersSelector } from 'src/app/store/selectors/shopping-cart.selectors';
import { take } from 'rxjs';
import { selectOneProduct } from 'src/app/store/selectors/product.selectors';
import { findOneProduct } from 'src/app/store/actions/product.action';
import { checkout } from 'src/app/store/actions/shopping-cart.action';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  
  orders$ = this.store.select(ordersSelector);
  constructor(
    private store: Store<AppState>
  ) {}

  

  checkout(): void {
    window.alert('Completed order!');
    //this.productService.checkout().subscribe();
    this.store.dispatch(checkout());
  }
}
