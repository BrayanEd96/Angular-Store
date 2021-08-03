import { Injectable } from '@angular/core';
import { Product } from '../../../products/components/product/product.model';
// import { XMLHttpRequest } from 'xmlhttprequest';

// const dataJson = './products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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

  getAllProducts() {
    return this.products
  }

  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}









// export class ProductsService {

//   constructor() { }

//   fetchDAta(url: string) {
//     return new Promise<void>((resolve, reject) => {
//       const xhttp = new XMLHttpRequest();
//       xhttp.open('GET', url, true);
//       xhttp.onreadystatechange = (() => {
//         (xhttp.readyState === 4) ? (xhttp.status === 200) ? resolve(JSON.parse(xhttp.responseText)) : reject(new Error("Error")) : false;
//       });
//       xhttp.send();
//     })
//   }

//   getAllProducts() {
//     this.fetchDAta(dataJson)
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.error(err);
//     })
//   }

//   getProduct(id: number){

//   }
// }
