import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Item } from '../login/signup.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private cartDetails: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
  prodArr: Array<Item> = [];
  constructor() { }
get getCartCount()
{
  var ss = sessionStorage.getItem("products");
  if (ss && ss.length >0) {
    var obj = JSON.parse(ss) as Array<Item>;
    this.cartCount.next(obj.length)
  }
  else{
    this.cartCount.next(0);
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

  getItems():Observable<Item[]>{
    var ss = sessionStorage.getItem("products");
    if (ss && ss.length >0) {
      var lst =  JSON.parse(ss).map((x: { checked: boolean; })=> {x.checked = false;
        console.log(x);
      return x;
      });
      console.log(lst);
this.cartDetails.next(lst);

      return this.cartDetails.asObservable();
    }
    else{
      this.cartDetails.next([]);
    }
    return this.cartDetails.asObservable();
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
