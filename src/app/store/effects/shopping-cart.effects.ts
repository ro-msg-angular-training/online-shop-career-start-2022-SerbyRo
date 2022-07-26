import { Injectable } from '@angular/core';
import { ProductService } from 'src/app/components1/product.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, of, switchMap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { Order } from 'src/app/order';

import {
  checkout,
  checkoutFailure,
  checkoutSuccess,
} from '../actions/shopping-cart.action';
import { ordersSelector } from '../selectors/shopping-cart.selectors';
import { userSelector } from '../selectors/auth.selectors';
//import * as CartActions from '../actions/shopping-cart.action';

@Injectable()
export class CartEffects {
  constructor(
    private store: Store<AppState>, 
    private actions$: Actions,
    private productService: ProductService
  ) {}
  //        addToCart$ = createEffect(() => {
  //           return this.actions$.pipe(
  //             ofType(CartActions.addToCart),
  //             map(({id})=> CartActions.addToCartSuccess({id}))
  //           );
  //         });

  checkout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(checkout),
      withLatestFrom(this.store.select(ordersSelector), this.store.select(userSelector)),
      mergeMap(([_, orders,user]) => {
        if (user === null) {
          return of(checkoutFailure())
        }
        return this.productService.checkout2(orders, user.username).pipe(
          map(() => checkoutSuccess()),
          catchError(() => of(checkoutFailure()))
        );
      })
    );
  });
}
