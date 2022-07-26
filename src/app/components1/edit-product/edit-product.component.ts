import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import Product from '../Types/product';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { first } from 'rxjs';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.state';
import {
  findOneProduct,
  updateProduct,
} from 'src/app/store/actions/product.action';
import { selectOneProduct } from 'src/app/store/selectors/product.selectors';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  productSubscription: Subscription | undefined;

  product: Product = {
    id: 0,
    description: '',
    name: '',
    category: '',
    price: 0,
    image: '',
  };

  id = Number(this.route.snapshot.paramMap.get('id'));
  profileForm = this.fb.group({
    name: ['', [Validators.required, Validators.nullValidator]],
    category: ['', [Validators.required, Validators.nullValidator]],
    price: [0, [Validators.required, Validators.min(1)]],
    //image: ['', [Validators.required,Validators.nullValidator]],
    description: ['', [Validators.required, Validators.nullValidator]],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.productService.findOneProduct(this.id).subscribe((data) => {
      this.product = data;
      this.profileForm.patchValue(this.product);
    });
  }

  saveChanges() {
    if (this.profileForm.valid) {
      this.product.name = this.profileForm.value.name ?? '';
      this.product.category = this.profileForm.value.category ?? '';
      this.product.description = this.profileForm.value.description ?? '';
      this.product.price = this.profileForm.value.price ?? 0;
      //this.product.image = this.profileForm.value.image ?? '';
      // this.productSubscription = this.productService.updateProduct(this.product,this.product.id)
      //   .subscribe(()=>{
      //     window.alert("The product was added!");
      //     this.router.navigateByUrl('/ProductsList');
      //   }

      //   );

      if (this.product) {
        this.store.dispatch(
          updateProduct({ product: this.product, id: this.product.id })
        );
        alert('You updated your product details');
      } else {
        alert('Invalid data! Retry!');
      }
    }
  }

  cancel() {
    this.location.back();
  }

  onLeave() {
    this.productSubscription?.unsubscribe();
  }
}
