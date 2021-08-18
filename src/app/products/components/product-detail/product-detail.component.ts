import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product = null;
  id: string;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.getIdParam();
    this.fetchProduct();
  }

  getIdParam(){
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
    })
  }

  fetchProduct() {
    this.productsService.getProduct(this.id)
    .subscribe(product => {
      this.product = product;
    });
  }

  updProduct() {
    const changes = {
      "title": "No es de Angular",
      "price": 4500,
      "image": "assets/images/stickers1.png"
    }

    this.productsService.updateProduct(this.id, changes)
    .subscribe(result => {
      alert(`Producto ${result} actualizado`);
      console.log(result);
      
    });
  }

  delProduct() {
    this.productsService.deleteProduct(this.id)
    .subscribe(result => {
      console.log(result);
    });
  }

}
