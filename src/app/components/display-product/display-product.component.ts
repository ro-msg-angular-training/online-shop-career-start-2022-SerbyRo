import { Component, OnInit } from '@angular/core';
//import {ListOfProductsComponent} from 'C:\Users\ioness\Desktop\CareersStart\online-shop-career-start-2022-SerbyRo\src\app\components\list-of-products';
import  Product from '../Types/Product';
import {ActivatedRoute} from "@angular/router";
import { ServiceComponent} from "../service/service.component";
@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.scss']
})
export class DisplayProductComponent implements OnInit {

  constructor(private serviceProduct: ServiceComponent, private route:ActivatedRoute ) {
   }
  title = 'First Serban Angular application';
  ngOnInit(): void {
     this.findOneProduct();
  }
 product: Product = {
     id: 0,
     name: '',
     price: 0,
     category: '',
     image: '',
   };

    findOneProduct(): void{
       const id = Number(this.route.snapshot.paramMap.get('id'));
       const tempProduct = this.serviceProduct.findOneProduct(id);
       if(tempProduct !== null)
         this.product=tempProduct;
     }


     addProductToList(): void {
         window.alert(this.product.name + " " + this.product.category + " " + this.product.price + ' was added to cart!');
       }
}
