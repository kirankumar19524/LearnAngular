import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../login/signup.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  prodArr: Array<Item> = [];
  constructor() { }
get getCartCount()
{
  var ss = sessionStorage.getItem("products");
  if (ss && ss.length >0) {
    var obj = JSON.parse(ss) as Array<Item>;
    this.cartCount.next(obj.length)
  }
  return this.cartCount.asObservable();
}

  addItem(item: Item) {

    var ss = sessionStorage.getItem("products");
    if (ss && ss.length >0) {
      this.prodArr = JSON.parse(ss);
    }
    this.prodArr.push(item);
    this.cartCount.next(this.prodArr.length);
    sessionStorage.setItem("products", JSON.stringify(this.prodArr));
  }

  getItems(){
    var ss = sessionStorage.getItem("products");
    if (ss && ss.length >0) {
      return JSON.parse(ss);
    }
    return [];
  }
  removeItem(item:Item){
    var ss = sessionStorage.getItem("products");
    if (ss && ss.length >0) {
      this.prodArr = JSON.parse(ss);
    }
    var index = this.prodArr.findIndex((obj) => obj.id === item.id);
    this.prodArr.splice(index as number, 1);
    this.cartCount.next(this.prodArr.length);
    sessionStorage.setItem("products", JSON.stringify(this.prodArr));
  }
}
