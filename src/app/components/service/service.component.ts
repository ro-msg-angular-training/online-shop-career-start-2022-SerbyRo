import { Component, OnInit } from '@angular/core';
import  Product from '../Types/Product';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products: Product[] = [
        {
          id: 1,
          name: 'Milka',
          price: 210,
          category: 'chocolate',
          image: 'https://pepperyspot.com/wp-content/uploads/2019/05/milka-oreo-choco-chocolate-bar-100g-35-oz-1.jpg',
        },

        {
          id: 2,
          name: 'Asus 270',
          price: 21,
          category: 'Laptop',
          image: 'https://i5.walmartimages.com/asr/aa4c8c5e-2a70-48e7-812a-448b8e556da2_7.d52ad2d04c4be5bf06d98d28b9b91b7d.jpeg',
        },

          {
            id: 3,
            name: 'Rolex 120',
            price: 150,
            category: 'Watch',
            image: 'https://www.bobswatches.com/images/zRolex-Daytona-116505---123873.jpg',
          },
        ];

       getAllProducts():Product[]{
        return this.products;
       }
       findOneProduct(id:number) : Product | null{
//             for (const product in this.products)
//             {
//                 if (product.id == id)
//                 {
//                     return product;
//                 }
//             }
//             return null;
        this.products.forEach((product:Product)=>{
           if (product.id === id)
                return product;
           return null;
        });
        return null;
       }

}
