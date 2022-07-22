import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import Product from '../Types/Product';
import { AuthentificationService } from '../authentification.service';
@Component({
  selector: 'app-list-product-detail',
  templateUrl: './list-product-detail.component.html',
  styleUrls: ['./list-product-detail.component.scss'],
})
export class ListProductDetailComponent implements OnInit {
  products: Product[] = [];
  canEditProducts: boolean = this.authService.userHasRole('admin');
  constructor(private productService: ProductService,private authService: AuthentificationService) {}

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
