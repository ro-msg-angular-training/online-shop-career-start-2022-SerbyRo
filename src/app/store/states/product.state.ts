import Product from 'src/app/components1/Types/product';

export interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  error: '',
  status: 'pending',
};
