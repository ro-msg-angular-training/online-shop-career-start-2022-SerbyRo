import { AuthentificationState } from './auth.state';
import { ProductState } from './product.state';
import { ShoppingCartState } from './shopping-cart.state';

export interface AppState {
  products: ProductState;
  auths: AuthentificationState;
  carts: ShoppingCartState;
}
