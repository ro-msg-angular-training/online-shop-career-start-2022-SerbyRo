import { state } from '@angular/animations';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { ShoppingCartState } from '../states/shopping-cart.state';

export const shoppingcartState = (state: AppState) => state.carts;

export const ordersSelector = createSelector(
  shoppingcartState,
  (state: ShoppingCartState) => state.orders
);
