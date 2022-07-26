import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { ProductState } from '../states/product.state';

export const selectProducts = (state: AppState) => state.products;
export const productsSelector = createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
  selectProducts,
  (state: ProductState) => state.products
);

export const selectOneProduct = createSelector(
  productsSelector,
  (state: ProductState) => state.selectedProduct
);
