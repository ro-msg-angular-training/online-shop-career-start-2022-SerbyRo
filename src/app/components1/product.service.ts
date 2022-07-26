import { Injectable, EventEmitter, Output } from '@angular/core';
import Product from './Types/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../order';
import { environment } from 'src/environments/environment';
import { User } from './Types/user';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartProducts: Order[] = [];

  constructor(private http: HttpClient) {}

  @Output() event = new EventEmitter();

  findOneProduct(id: number): Observable<Product> {
    return this.http.get<Product>(environment.url + `/products/${id}`);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.url}/products`);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.url}/products/${id}`);
  }

  saveProduct(product: Product) {
    return this.http.post(`${environment.url}/products`, product);
  }

  updateProduct(product: Product, id: number) {
    return this.http.put(`${environment.url}/products/${id}`, product);
  }

  addToCart(id: number): void {
    let index = this.cartProducts.findIndex(
      (cartProducts) => cartProducts.productId === id
    );

    if (index !== -1) {
      this.cartProducts[index].quantity += 1;
    } else if (index === -1) {
      this.cartProducts.push({ productId: id, quantity: 1 });
    }
  }

  checkout() {
    return this.http.post(
      `${environment.url}/orders`,
      { customer: 'doej', products: this.cartProducts },
      { responseType: 'text' }
    );
  }

  checkout2(productOrder: Order[],username: string): Observable<string> {
    if (productOrder.length > 0) {
      const data = {
        customer: username,
        products: productOrder,
      };
      productOrder = [];
      return this.http.post(`${environment.url}/orders`, data, {
        responseType: 'text',
      });
    }
    return new Observable<string>();
  }

  getOrders(): Order[] {
    return this.cartProducts;
  }
}
