import { Injectable } from '@angular/core';
import { Product } from './classes/Product';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  getProducts(){
    return new Promise<Product[]>((resolve, reject) => { 
      fetch('assets/data/data.json')
      .then((data) => {
        resolve(data.json());
      });
    });
  }
}
