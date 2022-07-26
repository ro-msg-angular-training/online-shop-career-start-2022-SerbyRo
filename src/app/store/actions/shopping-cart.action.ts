import { createAction, props } from '@ngrx/store';
import { Order } from 'src/app/order';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const addToCart = createAction(
  '[Order] Add To Cart',
  props<{ id: number }>()
);

export const checkout = createAction(
  '[Checkout] Checkout'
);

export const checkoutSuccess = createAction('[Checkout] Checkout Success');

export const checkoutFailure = createAction(
  '[Checkout] Checkout Failure'
);

//  export const addToCart = createAction(
//     '[Product] Add Product To Cart',
//     props<{id:number}>()
//  );

// export const addToCartSuccess = createAction(
//     '[Product] Add Product To Cart Success',
//     props<{id: number}>()
// )

// export const addToCartFailure = createAction(
//     '[Product] Add Product to Cart Error',
//     props<{ error: string }>()
// )
