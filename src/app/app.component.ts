import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Product } from './classes/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  products:Product[] = [];
  modalFlag:boolean = false;


  constructor(private service:AppService){}
  ngOnInit(){
    this.service.getProducts().then(res=>{
      res.map(product=>{
        this.products.push(new Product(product.brandName,product.productName,product.quantity,product.price,product.mrp,product.imageURL,product.offerText))
      })
      
    })
  }
  checkout(){
    if(this.getTotal() > 0){
      this.modalFlag = true;
    }
  }
  modelClose(){
    this.modalFlag = false;
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
}
