import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import Product from 'src/app/components1/Types/product';

export const findOneProduct = createAction(
  '[Product] Find One Product',
  props<{ id: number }>()
);

export const findOneProductSuccess = createAction(
  '[Product] Find One Product Success',
  props<{ product: Product }>()
);

export const findOneProductFailure = createAction(
  '[Product] Find One Product Failure',
  props<{ response: HttpErrorResponse }>()
);

export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: Product }>()
);

export const addProductSuccess = createAction(
  '[Product] Add Product Success',
  props<{ product: Product }>()
);

export const addProductFailure = createAction(
  '[Product] Add Product Failure',
  props<{ response: HttpErrorResponse }>()
);

export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ id: number }>()
);

export const deleteProductSuccess = createAction(
  '[Product] Delete Product Success',
  props<{ id: number }>()
);

export const deleteProductFailure = createAction(
  '[Product] Add Product Failure',
  props<{ response: HttpErrorResponse }>()
);

export const getAllProducts = createAction('[Product] Get All Products');

export const getAllProductsSuccess = createAction(
  '[Product] Get All Products Success',
  props<{ products: Product[] }>()
);

export const getAllProductsFailure = createAction(
  '[Product] Get All Products Failure',
  props<{ error: string }>()
);

export const updateProduct = createAction(
  '[Product] Update Product',
  props<{ product: Product; id: number }>()
);

export const updateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<{ product: Product }>()
);

export const updateProductFailure = createAction(
  '[Product] Update Product Failure',
  props<{ response: HttpErrorResponse }>()
);
