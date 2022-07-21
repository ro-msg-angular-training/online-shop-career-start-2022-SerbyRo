import { Injectable,EventEmitter,Output } from '@angular/core';
import Product from './Types/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../order';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  
  cartProducts: Order[] = [];

  constructor(private http: HttpClient) {}

  @Output() event = new EventEmitter();

  findOneProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${'http://localhost:3000'}/products/${id}`);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${'http://localhost:3000'}/products`);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${'http://localhost:3000'}/products/${id}`);
  }

  saveProduct(product: Product){
    return this.http.post(`${'http://localhost:3000'}/products`,product);
  }

  updateProduct(product:Product, id: number){
      return this.http.put(`${'http://localhost:3000'}/products/${id}`,product);
  }

  addToCart(id: number): void{
      let index = this.cartProducts.findIndex(
        cartProducts => cartProducts.productId === id
      );

      if (index !== -1) {
        this.cartProducts[index].quantity += 1;
      } else if (index === -1) {
        this.cartProducts.push({productId: id, quantity: 1 })
      }
  }

  checkout(){
    console.log("Am ajuns");
    return this.http.post(`${'http://localhost:3000'}/orders`, {customer:"doej", products: this.cartProducts}, {responseType: 'text'})
  }

  getOrders(): Order[] {
    return this.cartProducts;
  }
}
