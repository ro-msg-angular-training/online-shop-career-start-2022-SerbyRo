import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/components1/product.service';
import { AppState } from '../states/app.state';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  findOneProduct,
  findOneProductSuccess,
  findOneProductFailure,
  addProduct,
  addProductSuccess,
  addProductFailure,
  deleteProduct,
  deleteProductSuccess,
  deleteProductFailure,
  getAllProducts,
  getAllProductsSuccess,
  getAllProductsFailure,
  updateProduct,
  updateProductSuccess,
  updateProductFailure,
} from '../actions/product.action';
import { from, of } from 'rxjs';
import { switchMap, map, catchError, concatMap } from 'rxjs';
import Product from 'src/app/components1/Types/product';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private productService: ProductService
  ) {}

  getAllProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllProducts),
      switchMap(() =>
        from(this.productService.getAllProducts()).pipe(
          map((products) => getAllProductsSuccess({ products: products })),
          catchError((error) => of(getAllProductsFailure({ error })))
        )
      )
    )
  );

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addProduct),
      switchMap((action) =>
        this.productService.saveProduct(action.product).pipe(
          map((product: any) => addProductSuccess({ product })),
          catchError((response) => of(addProductFailure({ response })))
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProduct),
      switchMap((action) =>
        this.productService.deleteProduct(action.id).pipe(
          map(() => action.id),
          map((id) => deleteProductSuccess({ id })),
          catchError((response) => of(deleteProductFailure({ response })))
        )
      )
    )
  );

  findOneProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findOneProduct),
      concatMap((action) => this.productService.findOneProduct(action.id)),
      map((product) => findOneProductSuccess({ product: product }))
    )
  );

  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProduct),
      switchMap((action) =>
        this.productService.updateProduct(action.product, action.id).pipe(
          map(() => action.product),
          map((product: Product) => updateProductSuccess({ product })),
          catchError((response) => of(updateProductFailure({ response })))
        )
      )
    )
  );
}
