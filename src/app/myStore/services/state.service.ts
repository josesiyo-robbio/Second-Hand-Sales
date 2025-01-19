import { Injectable } from '@angular/core';
import {Products} from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class StateService
{
  //CLASS PROPERTIES
  private selectedProduct : Products  | null = null;


  //GETTERS & SETTERS
  setProducts(product : Products) : void
  {
    this.selectedProduct = product;
  }


  getProduct(): Products | null
  {
    return this.selectedProduct;
  }

}
