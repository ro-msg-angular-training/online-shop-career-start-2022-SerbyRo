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
import Product from '../Types/Product';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
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
    name: ['', [Validators.required,Validators.nullValidator]],
    category: ['', [Validators.required,Validators.nullValidator]],
    price: [0, [Validators.required, Validators.min(1)]],
    //image: ['', [Validators.required,Validators.nullValidator]],
    description: ['', [Validators.required,Validators.nullValidator]],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
    private http: HttpClient,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.http.get<Product>(`${'http://localhost:3000'}/products/${this.id}`).subscribe((data)=>{
      this.product = data;
      this.profileForm.patchValue(this.product);
    })
  }

  saveChanges() {
    // const product1: Product = {
    //   id: this.id,
    //   category:this.profileForm.value.category || '',
    //   description: this.profileForm.value.description || '',

    // };
    if (this.profileForm.valid)
    {
      this.product.name = this.profileForm.value.name ?? '';
    this.product.category = this.profileForm.value.category ?? '';
    this.product.description = this.profileForm.value.description ?? '';
    this.product.price = this.profileForm.value.price ?? 0;
    //this.product.image = this.profileForm.value.image ?? '';
    this.http
      .put(`${'http://localhost:3000'}/products/${this.id}`, this.product)
      .subscribe(()=>{
        window.alert("The product was added!");
        this.router.navigateByUrl('/ProductsList');
      }

      );
    }
    
  }

  cancel() {
    this.location.back();
  }
}
