import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../classes/Product';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() products:Product[];
  @Output() checkout = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  getQty(){
    let qty = 0;
    this.products.map(product=>{
      if(product.selectedCount>0){
        qty += product.selectedCount;
      }
    })
    return qty;
  }
  getTotal(){
    let price = 0;
    this.products.map(product=>{
      if(product.selectedCount>0){
        price += product.selectedCount*product.price;
      }
    })
    return price;
  }
  checkoutClick(){
    this.checkout.emit();
  }
}
