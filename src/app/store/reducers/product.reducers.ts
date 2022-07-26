import { from } from 'rxjs';
import { createReducer, on } from '@ngrx/store';

import { initialState } from '../states/product.state';
import {
  addProduct,
  addProductSuccess,
  addProductFailure,
  findOneProduct,
  findOneProductFailure,
  findOneProductSuccess,
  getAllProducts,
  getAllProductsSuccess,
  getAllProductsFailure,
  deleteProduct,
  deleteProductSuccess,
  deleteProductFailure,
  updateProduct,
  updateProductSuccess,
  updateProductFailure,
} from '../actions/product.action';
import { state } from '@angular/animations';
import { ProductsEffects } from '../effects/product.effects';

export const productReducer = createReducer(
  initialState,
  on(addProduct, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
    status: 'loading',
  })),

  on(addProductSuccess, (state) => ({
    ...state,
    status: 'success',
    error: null,
  })),

  on(addProductFailure, (state) => ({
    ...state,
    status: 'error',
    error: null,
  })),

  on(deleteProduct, (state, { id }) => ({
    ...state,
    products: state.products.filter((product) => product.id !== id),
  })),

  on(deleteProductSuccess, (state) => ({
    ...state,
    status: 'success',
    error: null,
  })),

  on(deleteProductFailure, (state) => ({
    ...state,
    status: 'error',
    error: null,
  })),

  on(findOneProduct, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(findOneProductSuccess, (state, { product }) => ({
    ...state,
    status: 'success',
    selectedProduct: product,
  })),

  on(getAllProducts, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(getAllProductsSuccess, (state, { products }) => ({
    ...state,
    products: products,
    error: null,
    status: 'success',
  })),

  on(getAllProductsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(updateProduct, (state) => ({
    ...state,
    status: 'loading',
  }))
);
