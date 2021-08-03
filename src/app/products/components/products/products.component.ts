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

  constructor(private allProducts: ProductsService){}

  ngOnInit(){
    this.products = this.allProducts.getAllProducts();
  }

}
