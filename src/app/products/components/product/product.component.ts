import { Component, Input} from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {

  @Input('productAsObject') product: Product;

  addCart = ($event: string) =>{
    alert(`El producto ${$event} se ha agregado al carrito`);
  }
  
}
