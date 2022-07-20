import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import Product from '../Types/Product';

@Component({
  selector: 'app-list-product-detail',
  templateUrl: './list-product-detail.component.html',
  styleUrls: ['./list-product-detail.component.scss']
})
export class ListProductDetailComponent implements OnInit {

  products: Product[]=[]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {

    this.productService.getAllProducts().subscribe(data => {this.products = data;})
  }

}
