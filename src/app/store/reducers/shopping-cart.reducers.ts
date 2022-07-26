import { createReducer, on } from '@ngrx/store';
//import { addToCart, addToCartFailure,addToCartSuccess} from '../actions/shopping-cart.action';
import { state } from '@angular/animations';
import { initialShoppingCartState } from '../states/shopping-cart.state';
import { ShoppingCartState } from '../states/shopping-cart.state';
import {
  addToCart,
  checkout,
  checkoutFailure,
  checkoutSuccess,
} from '../actions/shopping-cart.action';
import { addProductSuccess } from '../actions/product.action';
export const cartReducer = createReducer(
  initialShoppingCartState,
  on(addToCart, (state, { id }) => {
    let foundProduct = false

    const orders = state.orders.map((order) => {
      if (order.productId === id) {
        foundProduct = true;
        return { productId: id, quantity: order.quantity + 1 };
      } else {
        return order;
      }
    });

    // No order with the productId was found
    if (!foundProduct) {
      orders.push({ productId : id, quantity: 1 });
    }

    return { ...state, orders };
  }),

  on(checkout, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(checkoutSuccess, (state) => ({
    ...state,
    productOrders: [],
    status: 'success',
    error: null,
  })),

  on(checkoutFailure, (state) => ({
    ...state,
    status: 'error',
    error: 'error',
  }))
);
