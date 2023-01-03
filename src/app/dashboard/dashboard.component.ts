import { Component, OnInit } from '@angular/core';
import { SignupService } from '../login/signup.service';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: any = [];
  title: string = "Products catalog";

  constructor(private serv: SignupService, private cartServ: CartService) {

  }
  ngOnInit(): void {
    this.serv.getItems().subscribe((data) => {
      console.log(data);
      this.items = data;
    });
  }

  addToCart(itm: any) {
    this.cartServ.addItem(itm);

  }
}
