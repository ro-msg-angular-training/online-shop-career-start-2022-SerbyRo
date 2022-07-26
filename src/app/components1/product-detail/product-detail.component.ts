import { Component, OnDestroy, OnInit } from '@angular/core';
import Product from '../Types/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { AuthentificationService } from '../authentification.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.state';
import {
  findOneProduct,
  deleteProduct,
} from 'src/app/store/actions/product.action';
import { selectOneProduct } from 'src/app/store/selectors/product.selectors';
import { adminRoleSelector } from 'src/app/store/selectors/auth.selectors';
import { addToCart } from 'src/app/store/actions/shopping-cart.action';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  productSubscription = new Subscription();
  selectedSubscription = new Subscription();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthentificationService,
    private store: Store<AppState>
  ) {}

  product: Product = {
    id: 0,
    description: '',
    name: '',
    price: 0,
    category: '',
    image: '',
  };

  id1: number | undefined;

  selectedProduct$ = this.store.select(selectOneProduct);

  canEditProduct: boolean | undefined;
  canAddToCart: boolean | undefined;

  ngOnInit(): void {
    this.id1 = this.route.snapshot.params['id'];
    if (this.id1) {
      this.store.dispatch(findOneProduct({ id: this.id1 }));
    }
    this.selectedSubscription = this.selectedProduct$.subscribe((product) => {
      if (product) {
        this.product = product;
      }
    });
    this.canEditProduct = this.authService.userHasRole('admin');
    this.canAddToCart = this.authService.userHasRole('customer');
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
    this.selectedSubscription.unsubscribe();
  }

  get(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.productSubscription = this.productService
      .findOneProduct(id)
      .subscribe((data) => {
        this.product = data;
      });
  }

  addToCart(): void {
    window.alert(
      this.product.description + ' ' + this.product.name + ' was added to cart!'
    );
    //this.productService.addToCart(this.product.id);
    this.id1 = parseInt(this.route.snapshot.params['id']);
    this.store.dispatch(addToCart({ id: this.id1 }));
  }

  deleteProdus(id: number): void {
    if (this.id1) {
      this.store.dispatch(deleteProduct({ id: this.id1 }));
      alert(`The product with ID ${this.id1} has been successfully deleted`);
    }
  }

  onLeave() {
    //this.productSubscription?.unsubscribe();
  }
}
