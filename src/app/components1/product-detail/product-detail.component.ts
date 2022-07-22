import { Component, OnInit } from '@angular/core';
import Product from '../Types/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { AuthentificationService } from '../authentification.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productSubscription: Subscription | undefined;

  constructor(private productService: ProductService, private route: ActivatedRoute,private router: Router,private authService: AuthentificationService) {
  }

  product: Product = {
    id: 0,
    description: '',
    name: '',
    price: 0,
    category: '',
    image: '',
  };

  
  canEditProduct: boolean | undefined;
  canAddToCart: boolean | undefined;

  ngOnInit(): void {
    this.get();
    this.canEditProduct = this.authService.userHasRole('admin');
    this.canAddToCart = this.authService.userHasRole('customer');
  }

  get(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.productSubscription = this.productService.findOneProduct(id).subscribe(data => {this.product = data;});
  }

  addToCart(): void {
    window.alert(this.product.description + " " + this.product.name + ' was added to cart!');
    this.productService.addToCart(this.product.id);
  }

  deleteProdus(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
        window.alert(this.product.name + ' with id = ' + id + ' was deleted!');
      })
    };


  onLeave(){
    this.productSubscription?.unsubscribe();
  }
}
