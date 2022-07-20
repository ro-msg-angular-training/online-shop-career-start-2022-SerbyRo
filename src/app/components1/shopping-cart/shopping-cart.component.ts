import { Component, OnInit } from '@angular/core';
import Product from '../Types/Product';
import { Order } from 'src/app/order';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartProducts: Order[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.cartProducts = this.productService.getOrders();
  }
  checkout(): void{
    window.alert('Completed order!');
    this.productService.checkout().subscribe(()=>{});
  }

}
