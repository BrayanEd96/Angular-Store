import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';

import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  newprod: Product;

  constructor(private productsService: ProductsService){}

  ngOnInit(){
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  createProduct() {
    const thenew: Product = {"id":"265","image":"assets/images/camiseta.png","title":"New Camiseta","price":7000,"description":"lorem impsum "}
    this.productsService.addProduct(thenew)
    .subscribe(newProduct => {
      this.newprod = newProduct;
    });
  }

}
