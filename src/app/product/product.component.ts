import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../classes/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() products:Product[];
  constructor() { }

  ngOnInit(): void {
  }
  countChange(data:number,product:Product){
    product.selectedCount = data;
    console.log(this.products);
  }
  addToCart(product:Product){
    if(product.selectedCount == 0){
      product.selectedCount = 1;
    }
  }
}
