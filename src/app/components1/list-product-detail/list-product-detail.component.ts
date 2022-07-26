import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import Product from '../Types/product';
import { AuthentificationService } from '../authentification.service';
import { Store } from '@ngrx/store';
import { getAllProducts } from 'src/app/store/actions/product.action';
import {
  adminRoleSelector,
  customerRoleSelector,
} from 'src/app/store/selectors/auth.selectors';
import { selectAllProducts } from 'src/app/store/selectors/product.selectors';
import { AppState } from 'src/app/store/states/app.state';
@Component({
  selector: 'app-list-product-detail',
  templateUrl: './list-product-detail.component.html',
  styleUrls: ['./list-product-detail.component.scss'],
})
export class ListProductDetailComponent implements OnInit {
  products: Product[] = [];
  canEditProducts: boolean = this.authService.userHasRole('admin');
  constructor(
    private productService: ProductService,
    private authService: AuthentificationService,
    private store: Store<AppState>
  ) {}

  public allProducts$ = this.store.select(selectAllProducts);

  hasCustomerRole: boolean | undefined;
  hasAdminRole: boolean | undefined;
  adminRoleSelector = this.store.select(adminRoleSelector);
  customerRoleSelector = this.store.select(customerRoleSelector);

  ngOnInit(): void {
    this.store.dispatch(getAllProducts());
    this.adminRoleSelector.subscribe((role) => {
      this.hasAdminRole = role;
    });
    this.customerRoleSelector.subscribe((role) => {
      this.hasCustomerRole = role;
    });
  }

  get(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
