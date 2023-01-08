import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../login/signup.service';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartDetails:Item[] =[];
  selectAllChkIndeterminate:boolean = false;

  /**
   *
   */
  constructor(private cartServ: CartService) {
    

  }
  ngOnInit(): void {
    this.cartServ.getItems().subscribe(x=> this.cartDetails = x);
  }
removeItem(cart:any){
  this.cartServ.removeItem(cart);
  console.log(cart);
  this.cartServ.getItems().subscribe(x=> this.cartDetails = x);
}

checkAllCheckBox(ev: any) { 
  this.cartDetails.forEach(x => x.checked = ev.target.checked)
console.log("checkAllCheckBox");
  //console.log("checkAllCheckBox: {0}", this.cartDetails );
}

isAllCheckBoxChecked() {
  console.log("isAllCheckBoxChecked");
  var every = this.cartDetails.every(p => p.checked);
  return every;
}

eachCheckbox(){
  console.log("eachCheckbox");
  var every = this.cartDetails.every(p => p.checked);
  if(!every && this.cartDetails.some(p=>p.checked)){
    this.selectAllChkIndeterminate = true;
  }
  else{
    this.selectAllChkIndeterminate = false;
  }
}

}
