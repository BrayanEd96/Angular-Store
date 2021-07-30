import { Component } from '@angular/core';
import { Product } from '../product/product.model'; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/img/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/img/hoodie.png',
      title: 'Hoodie',
      price: 7000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/img/mug.png',
      title: 'Mug',
      price: 90000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/img/pin.png',
      title: 'Pin',
      price: 1000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/img/stickers1.png',
      title: 'Stickers',
      price: 20000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/img/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];

}
