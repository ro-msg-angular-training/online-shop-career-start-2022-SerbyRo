import { Order } from 'src/app/order';

export interface ShoppingCartState {
  orders: Order[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialShoppingCartState: ShoppingCartState = {
  orders: [],
  error: '',
  status: 'pending',
};
