import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartDetails:any;

  /**
   *
   */
  constructor(private cartServ: CartService) {
    
  }
  ngOnInit(): void {
    this.cartDetails = this.cartServ.getItems();
  }
removeItem(cart:any){
  this.cartServ.removeItem(cart);
  console.log(cart);
  this.cartDetails = this.cartServ.getItems();
}

}
