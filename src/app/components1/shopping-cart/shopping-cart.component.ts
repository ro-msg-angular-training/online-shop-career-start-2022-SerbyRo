import { Component, OnInit } from '@angular/core';
import Product from '../Types/product';
import { Order } from 'src/app/order';
import { ProductService } from '../product.service';
import { AuthentificationService } from '../authentification.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cartProducts: Order[] = [];
  canCheckout = this.authService.userHasRole('customer');
  constructor(private productService: ProductService,private authService:AuthentificationService) {}

  ngOnInit(): void {
    this.cartProducts = this.productService.getOrders();
    this.canCheckout && this.cartProducts.length !== 0;
  }
  checkout(): void {
    window.alert('Completed order!');
    this.productService.checkout().subscribe();
  }
}
